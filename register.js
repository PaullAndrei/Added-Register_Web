console.log("Helo World.", 43, 409.23, true, false,
["banana", "apple", "orange"]);

console.log(typeof("Hello World."), typeof(34234),
typeof(["banana"]))

let btnRegister = document.querySelector("#btnRegister");
let txtUsername = document.querySelector("#txtUsername");
let txtPassword = document.querySelector("#txtPassword");
let txtConfirmPassword = document.querySelector("#txtConfirmPassword");
let txtAge = document.querySelector("#txtAge");

btnRegister.onclick = function() { 
    register(txtUsername.value, txtPassword.value, txtConfirmPassword.value, txtAge.value);
}

function register (username, password, confirmpassword, age) {
    console.log(username, password, confirmpassword, age);
    // alert("Register button has been clicked")

}