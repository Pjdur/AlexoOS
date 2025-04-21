const appsFolder = './built-in/';
const apps = [
    { id: 'calculator', name: 'Calculator', file: 'calculator.html' },
    { id: 'textEditor', name: 'Text Editor', file: 'textEditor.html' }
];

function loadApps() {
    const taskbarButtons = document.getElementById('taskbar-buttons');

    apps.forEach(app => {
        // Add taskbar button
        const button = document.createElement('button');
        button.textContent = app.name;
        button.onclick = () => openApp(app);
        taskbarButtons.appendChild(button);
    });
}

function openApp(app) {
    let appElement = document.getElementById(app.id);

    // If the app is not already loaded, fetch and load it
    if (!appElement) {
        fetch(`${appsFolder}${app.file}`)
            .then(response => response.text())
            .then(html => {
                const appsContainer = document.getElementById('apps');
                const appDiv = document.createElement('div');
                appDiv.id = app.id;
                appDiv.className = 'app';
                appDiv.style.display = 'none'; // Do not show the app when loaded
                appDiv.innerHTML = html;
                appsContainer.appendChild(appDiv);
            })
            .catch(error => console.error(`Failed to load app: ${app.name}`, error));
    } else {
        // If the app is already loaded, just display it
        appElement.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', loadApps);