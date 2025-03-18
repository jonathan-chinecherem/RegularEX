function validateForm(){
    event.preventDefault(); 
        
    let fullName = document.getElementById("fullName").value.trim();
    let userName = document.getElementById("userName").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    let fullNamePattern = /^[A-Za-z\s]+$/;
    let userNamePattern = /^[a-zA-Z0-9]{3,15}$/;
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/;

    let check = true

    // Full Name Validation
    if (fullNamePattern.test(fullName)){
        document.getElementById("fullNameError").innerText = "";
        
    } else {
        document.getElementById("fullNameError").innerText = "Full name should only contain letters and spaces.";
        check = false
    }

    // User Name Validation
    if (userNamePattern.test(userName)){
        document.getElementById("userNameError").innerText = "";
        
    } else {
        document.getElementById("userNameError").innerText = "Username should be 3-15 characters long and alphanumeric.";
        check = false
    }

    // Email Validation
    if (emailPattern.test(email)){
        document.getElementById("emailError").innerText = "";
        
    } else {
        document.getElementById("emailError").innerText =  "invalid email address";
        check = false
    }

    // Password Validation
    if (passwordPattern.test(password)){
        document.getElementById("passwordError").innerText = "";
        
    } else {
        document.getElementById("passwordError").innerText = "Password must be at least 8 characters long, contain one letter, one number, and one special character.";
        check = false
    }

    // Confirm Password Validation
    if(password !== confirmPassword){
        document.getElementById("confirmPasswordError").innerText =  "Passwords do not match.";
        
    } else {
        document.getElementById("confirmPasswordError").innerText = "";
    }

    if (check) {
        alert ("Registration successful! kindly login")
        document.getElementById("userForm").reset();
        open ("./login.html")
        
    } 

}

// Validation For Login Page

function validate(){
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/;

    let check = true

     // Email Validation
     if (emailPattern.test(email)){
        document.getElementById("emailError").innerText = "";
    } else {
        document.getElementById("emailError").innerText =  "invalid email address";
        check = false
    }

    // Password Validation
    if (passwordPattern.test(password)){
        document.getElementById("passwordError").innerText = "";
    } else {
        document.getElementById("passwordError").innerText = "Password must be at least 8 characters long, contain one letter, one number, and one special character.";
        check = false
    }

    if (check) {
        alert ("Login successful!")
        open ("./index.html")
    }

}