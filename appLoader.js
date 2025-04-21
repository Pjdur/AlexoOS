const appsFolder = './built-in/';
const apps = [
    { id: 'calculator', name: 'Calculator', file: 'calculator.html'},
    { id: 'textEditor', name: 'Text Editor', file: 'textEditor.html'}
];

function loadApps() {
    const taskbarButtons = document.getElementById('taskbar-buttons');

    apps.forEach(app => {
        // Add taskbar button
        const button = document.createElement('button');
        button.textContent = app.name;
        button.onclick = () => openApp(app.id);
        taskbarButtons.appendChild(button);
    });
}

document.addEventListener('DOMContentLoaded', loadApps);