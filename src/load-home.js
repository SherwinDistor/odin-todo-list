import { addProjectFormHandler } from './add-new-project';

function loadHeader() {
    const header = document.createElement('header');
    header.classList = 'wrap';

    const logo = document.createElement('a');
    logo.id = 'logo-text';
    logo.textContent = 'To Do List';

    const newProjectBtn = document.createElement('button');
    newProjectBtn.classList = 'new-project-btn';
    newProjectBtn.textContent = 'Create New Project';
    newProjectBtn.addEventListener('click', addProjectFormHandler);

    header.appendChild(logo);
    header.appendChild(newProjectBtn);

    return header;
}

function loadMain() {
    const main = document.createElement('main');
    main.classList = 'wrap';

    const projectContainer = document.createElement('div');
    projectContainer.classList = 'wrap';
    projectContainer.id = 'project-container';

    main.appendChild(projectContainer);

    return main;
}

function loadHome() {
    const body = document.querySelector('body');

    body.appendChild(loadHeader());
    body.appendChild(loadMain());

    return body;
}

export { loadHome };
