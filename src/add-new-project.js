function addProjectFormHandler() {
    // e.preventDefault;

    // get project container div
    const projectContainer = document.querySelector('#project-container');

    // create new card with functionality to add new project
    const newProject = document.createElement('div');
    newProject.id = 'list';

    const formWrap = document.createElement('form');

    const projectHeaderInput = document.createElement('input');
    projectHeaderInput.classList.add('project-header-input');
    projectHeaderInput.placeholder = 'Add Project Title';

    formWrap.appendChild(projectHeaderInput);
    newProject.appendChild(formWrap);
    projectContainer.appendChild(newProject);

    return projectContainer;
}

// add event listener to create new project button

// create a form where you can fill in the title of the project

export { addProjectFormHandler };
