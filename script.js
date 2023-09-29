// Function to add a character to the result input
function addToResult(char) {
    document.getElementById("result").value += char;
}

// Function to clear the result input
function clearResult() {
    document.getElementById("result").value = "";
}

// Function to calculate the result of the expression in the result input
function calculateResult() {
    try {
        const expression = document.getElementById("result").value;
        const result = eval(expression);
        document.getElementById("result").value = result;
    } catch (error) {
        alert("Invalid expression");
        clearResult();
    }
}

// Function to add to memory (M+)
function addToMemory() {
    const currentValue = document.getElementById("result").value;
    const memoryValue = localStorage.getItem("calculatorMemory") || 0;
    const newValue = parseFloat(currentValue) + parseFloat(memoryValue);
    localStorage.setItem("calculatorMemory", newValue);
}

// Function to subtract from memory (M-)
function subtractFromMemory() {
    const currentValue = document.getElementById("result").value;
    const memoryValue = localStorage.getItem("calculatorMemory") || 0;
    const newValue = parseFloat(memoryValue) - parseFloat(currentValue);
    localStorage.setItem("calculatorMemory", newValue);
}

// Function to clear memory (MC)
function clearMemory() {
    localStorage.removeItem("calculatorMemory");
}
