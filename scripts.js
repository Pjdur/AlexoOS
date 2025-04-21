function openApp(appId) {
    document.getElementById(appId).style.display = 'block';
}

function closeApp(appId) {
    const appElement = document.getElementById(appId);
    if (appElement) {
        appElement.style.display = 'none';
    }
}

// Clock Function
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();