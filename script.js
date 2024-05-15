function executeCode() {
    var code = document.getElementById("codeInput").value;
    eval(code); // Hier wird der eingegebene Code ausgeführt (unsicher!)
}