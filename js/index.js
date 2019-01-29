document.getElementById("Compute").addEventListener("click", buttonHandler);

function buttonHandler() {
    let num1 = document.getElementById("Number1").value;
    let num2 = document.getElementById("Number2").value;
    let sum = addition(Number(num1), Number(num2));
    console.log("Sum is: " + sum);
    document.getElementById('sum').innerHTML = sum;
}