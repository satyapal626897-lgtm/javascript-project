
function validation() {

    let name = document.querySelector("#name").value.trim();
    let email = document.querySelector("#email").value.trim();
    let password = document.querySelector("#password").value.trim();
    let cpassword = document.querySelector("#cpassword").value.trim();

    let s1 = document.querySelector("#nameErr");
    let s2 = document.querySelector("#emailErr");
    let s3 = document.querySelector("#passErr");
    let s4 = document.querySelector("#cpassErr");

    s1.innerHTML = s2.innerHTML = s3.innerHTML = s4.innerHTML = "";

    if (name === "") {
        s1.innerHTML = "Name is required";
        s1.style.color = "red"
        return false;
    }

    if (email === "") {
        s2.innerHTML = "Email is required";
        s1.style.color = "red"
        return false;
    }
    else if (!email.includes("@") || !email.includes(".")) {
        s2.innerHTML = "Enter valid email";
        return false;
    }

    if (password === "") {
        s3.innerHTML = "Password is required";
        s1.style.color = "red"
        return false;
    }
    else if (!(password.match(/[0-9]/) && password.match(/[A-Z]/))) {
        s3.innerHTML = "Password must contain 1 number & 1 capital letter";
        return false;
    }

    if (cpassword === "") {
        s4.innerHTML = "Confirm password";
        s1.style.color = "red"
        return false;
    }
    else if (password !== cpassword) {
        s4.innerHTML = "Password not matched";
        return false;
    }

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Signup Successful ✅");
    location.href = "login.html";
    return false;
}


function login() {
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    let localEmail = localStorage.getItem("email");
    let localPassword = localStorage.getItem("password");

    if (email === localEmail && password === localPassword) {
        location.href = "home.html";
        return true;
    } else {
        alert("Invalid Email or Password ❌");
        return false;
    }
}
