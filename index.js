let num1 = parseInt(prompt("Enter First Number"));
let opera = prompt("Enter the operator/symbol");
let num2 = parseInt(prompt("Enter Second Number"));

if (opera == "+"){
    alert( (num1+num2) );
}
else if(opera == "-"){
    alert((num1-num2));
}

else if(opera == "/"){
    alert((num1/num2));
}

else if(opera == "*"){
    alert((num1*num2));
}