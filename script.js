//Function to compute the interest
function compute() {
    if (validatePrincipal()){
    //fetch set values
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    //calulate the interest earned
    var interest = principal * years * rate / 100;

    //convert the set year to actual years
    var year = new Date().getFullYear() + parseInt(years);

    //Output the result and highlight figures
    document.getElementById("result").innerHTML = "If you deposit <mark>" +
     principal + "</mark>,\<br\>at an interest rate of <mark>" + rate + 
     "%\</mark>.<br\>You will receive an amount of <mark>" + interest + 
     "</mark>,\<br\>in the year <mark>" + year + "\</mark><br\>"
    }
}
//function to dynamically show the slider value 
function updateRate() {
    document.getElementById("rate_val").innerText = document.getElementById("rate").value+"%";
}

//Function checks that principal field is neither empty nor a non-positive number
//
function validatePrincipal(){
    var principal = document.getElementById("principal");
    if (principal == "" || principal.value <= 0) {
        alert("Enter a positive number");
        principal.focus();
        principal.value="";
        return false;
      }
    return true;
}
