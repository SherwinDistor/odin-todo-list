import { Project } from './create-project';
import { loadList } from './load-list';

const projectLibrary = [];

function addProjectFormHandler() {
    // e.preventDefault;

    // get project container div
    const projectContainer = document.querySelector('#project-container');

    // create new card with functionality to add new project
    const newProject = document.createElement('div');
    newProject.id = 'list';
    // newProject.classList.add(`${projectLibrary.length}`);
    newProject.dataset.index = projectLibrary.length;

    const formWrap = document.createElement('form');
    formWrap.classList.add('title-input-form');

    const projectHeaderInput = document.createElement('input');
    projectHeaderInput.classList.add('project-header-input');
    projectHeaderInput.placeholder = 'Add Project Title';

    const submitBtn = document.createElement('button');
    submitBtn.classList.add('submit-btn');
    submitBtn.textContent = '✔️';
    submitBtn.addEventListener('click', handleHeaderSubmit);

    formWrap.appendChild(projectHeaderInput);
    formWrap.appendChild(submitBtn);
    newProject.appendChild(formWrap);
    projectContainer.appendChild(newProject);

    return projectContainer;
}

function handleHeaderSubmit(e) {
    e.preventDefault();
    const title = e.target.previousSibling.value;

    projectLibrary.push(new Project(title));
    const index = projectLibrary.length - 1;

    // const listCard = document.querySelector(
    //     `[data-index=${projectLibrary.length - 1}]`,
    // );

    const listCard = document.querySelector(
        `[data-index="${projectLibrary.length - 1}"]`,
    );

    listCard.innerHTML = '';

    listCard.append(loadList(projectLibrary, index));
    console.log(projectLibrary);
}

export { addProjectFormHandler, projectLibrary };
