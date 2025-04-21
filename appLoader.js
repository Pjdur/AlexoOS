const appsFolder = './built-in/';
const apps = [
    { id: 'calculator', name: 'Calculator', file: 'calculator.html'},
    { id: 'textEditor', name: 'Text Editor', file: 'textEditor.html'}
];

function loadApps() {
    const appsContainer = document.getElementById('apps');
    const taskbarButtons = document.getElementById('taskbar-buttons');

    apps.forEach(app => {
        // Load app HTML
        fetch(`${appsFolder}${app.file}`)
            .then(response => response.text())
            .then(html => {
                const appDiv = document.createElement('div');
                appDiv.id = app.id;
                appDiv.className = 'app';

                // Add style link
                const styleLink = document.createElement('link');
                styleLink.rel = 'stylesheet';
                styleLink.href = `${appsFolder}/app.css`;
                appDiv.appendChild(styleLink);

                appDiv.innerHTML += html;
                appsContainer.appendChild(appDiv);
            });

        // Add taskbar button
        const button = document.createElement('button');
        button.textContent = app.name;
        button.onclick = () => openApp(app.id);
        taskbarButtons.appendChild(button);
    });
}

document.addEventListener('DOMContentLoaded', loadApps);