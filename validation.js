let fnamenode = document.getElementById("firstname");
let emailnode = document.getElementById("email");
let mobilenode = document.getElementById("mobile");
let passnode = document.getElementById("pass");
let confpassnode = document.getElementById("confirmpass");
let showpassnode = document.getElementById("showpass");

let fnamespan = document.getElementById("nameerror");
let emailspan = document.getElementById("emailerror");
let mobilespan = document.getElementById("mobileerror");
let passspan = document.getElementById("passerror");
let confpassspan = document.getElementById("conpasserror");
let showpassspan = document.getElementById("showpasserror");

function validate1() {
    fnamespan.innerHTML = "";
    fnamenode.style.border = "1px solid green";
    let fname = fnamenode.value;
    if (fname == "")
        fnamespan.innerHTML = "<b>This field is required </b>";
    else if (fname.length < 3)
        fnamespan.innerHTML = "<b>name must be of 3 character </b>";
    else
        fnamenode.style.border = "2px solid green";
}

function validate2() {
    emailspan.innerHTML = "";
    emailnode.style.border = "1px solid green";
    let emailid = emailnode.value;
    if (emailid == "")
        emailspan.innerHTML = "<b>This field is required </b>";
    else if (!emailid.includes("@"))
        emailspan.innerHTML = "<b>@ is missing in email </b>";
    else
        emailnode.style.border = "1px solid green";
}

function validate3() {
    mobilespan.innerHTML = "";
    mobilenode.style.border = "1px solid green";
    let mobile = mobilenode.value;
    if (mobile == "")
        mobilespan.innerHTML = "<b>This field is required </b>";
    else if (isNaN(mobile))
        mobilepan.innerHTML = "<b>characters allowed</b>";
    else if (mobile.length != 10)
        mobilespan.innerHTML = "<b>only 10 digits allowed</b>";
    else
        mobilenode.style.border = "1px solid green";
}


function validate4() {
    passspan.innerHTML = ""
    passnode.style.border = "1px solid green";
    let regexp = new RegExp("/^([0-9a-zA-Z]){0,9}$/");
    let password = passnode.value;
    console.log(password);
    if (password == "") {
        passspan.innerHTML = "This field is required";
    }
    else if (regexp.test(password) != true) {
        passspan.innerHTML = "Password should be alphanumeric";
    }
    else if (password.length < 5 || password.length > 8) {
        passspan.innerHTML = "Password should be greater than or equal to 5 and less than 8";

    }
    else {
        passnode.style.border = "5px solid green"
    }
}

function validate5() {
    confpassspan.innerHTML = "";
    confpassnode.style.border = "1px solid green";
    let pwd = passnode.value;
    let confPassword = confpassnode.value;
    if (confPassword == "") {
        confpassspan.innerHTML = "This field is required";
    }
    else if (pwd !== confPassword) {
        confpassspan.innerHTML = "Password Do not Match";
    }
    else {
        confpassnode.style.border = "5px solid green";
    }

}

function Toggle() {
    var temp = document.getElementById("pass");
    if (temp.type === "password") {
        temp.type = "text";
    }
    else {
        temp.type = "password";
    }
}