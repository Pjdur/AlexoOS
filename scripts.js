function openApp(appId) {
    document.getElementById(appId).style.display = 'block';
}

function closeApp(appId) {
    document.getElementById(appId).style.display = 'none';
}

// Calculator Functions
let calcExpression = '';

function calcInput(value) {
    calcExpression += value;
    document.getElementById('calcDisplay').value = calcExpression;
}

function calculate() {
    try {
        const result = eval(calcExpression);
        document.getElementById('calcDisplay').value = result;
        calcExpression = '';
    } catch {
        document.getElementById('calcDisplay').value = 'Error';
        calcExpression = '';
    }
}

// Text Editor Functions
function saveText() {
    const text = document.getElementById('textArea').value;
    alert(`Text saved: ${text}`);
}

// Clock Function
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();