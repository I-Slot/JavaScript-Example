document.getElementById("hello").onclick = action;

function action() {
    let yourName = document.getElementById("your-name").value;
    let yourAge = parseInt(document.getElementById("your-age").value);

    let ageMultiply10 = yourAge + 10;
    
    // console.log(ageMultiply10)

    //  yourAge = parseInt(yourAge);

    // console.log(typeof (yourAge));
   
    document.getElementById("msg").textContent = `Your name is ${yourName}`;
    document.getElementById("msg2").textContent = `Your age will be ${ageMultiply10} in 10 years time`;
}