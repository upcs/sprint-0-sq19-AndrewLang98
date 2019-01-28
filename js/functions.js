function addition() {
    var num1 = document.getElementById("Number1").value;
    var num2 = document.getElementById("Number2").value;
    var sum = Number(num1) + Number(num2);

    document.getElementById("Output").innerHTML = sum;
}