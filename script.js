document.addEventListener("DOMContentLoaded", () => {
    const formTitle = document.getElementById("form-title");
    const authForm = document.getElementById("auth-form");
    const toggleText = document.getElementById("toggle-text");
    const toggleLink = document.getElementById("toggle-link");
    const submitBtn = document.getElementById("submit-btn");
    const emailField = document.getElementById("email");

    let isSignup = false;

    toggleLink.addEventListener("click", (e) => {
        e.preventDefault();
        isSignup = !isSignup;

        if (isSignup) {
            formTitle.innerText = "Signup";
            submitBtn.innerText = "Signup";
            toggleText.innerHTML = 'Already have an account? <a href="#" id="toggle-link">Login</a>';
            emailField.style.display = "block"; // Show email field in signup
        } else {
            formTitle.innerText = "Login";
            submitBtn.innerText = "Login";
            toggleText.innerHTML = 'Don\'t have an account? <a href="#" id="toggle-link">Sign up</a>';
            emailField.style.display = "none"; // Hide email field in login
        }
    });

    authForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert(isSignup ? "Signup Successful!" : "Login Successful!");
    });
});
