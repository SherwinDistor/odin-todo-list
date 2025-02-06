import { ListItem } from './create-list-item';

function listAdder() {
    const liAdder = document.createElement('li');
    const formWrap = document.createElement('form');

    const addBtn = document.createElement('button');
    addBtn.textContent = '✅';
    addBtn.addEventListener('click', inputGetter);
    addBtn.classList = 'add-btn';

    const listInfoDiv = document.createElement('div');

    const titleInput = document.createElement('input');
    titleInput.classList.add('list-item-title', 'adder');
    titleInput.placeholder = 'Add Title';
    titleInput.id = 'input-title';
    const descriptionInput = document.createElement('input');
    descriptionInput.classList.add('list-item-description', 'adder');
    descriptionInput.placeholder = 'Add Description';
    descriptionInput.id = 'input-description';
    const listFooterDiv = document.createElement('div');
    listFooterDiv.classList = 'list-footer';

    const priorityDropdown = document.createElement('select');
    priorityDropdown.id = 'priority-dropdown';
    const highOption = document.createElement('option');
    highOption.textContent = 'High';
    highOption.value = 'high';
    const mediumOption = document.createElement('option');
    mediumOption.textContent = 'Medium';
    mediumOption.value = 'medium';
    const lowOption = document.createElement('option');
    lowOption.textContent = 'Low';
    lowOption.value = 'low';

    const dueDate = document.createElement('input');
    dueDate.type = 'date';
    dueDate.id = 'due-date';

    priorityDropdown.appendChild(highOption);
    priorityDropdown.appendChild(mediumOption);
    priorityDropdown.appendChild(lowOption);

    listFooterDiv.appendChild(priorityDropdown);
    listFooterDiv.appendChild(dueDate);

    listInfoDiv.appendChild(titleInput);
    listInfoDiv.appendChild(descriptionInput);
    listInfoDiv.appendChild(listFooterDiv);

    formWrap.appendChild(addBtn);
    formWrap.appendChild(listInfoDiv);

    liAdder.appendChild(formWrap);

    return liAdder;
}

function inputGetter(event) {
    event.preventDefault();
    const title = document.getElementById('input-title').value;
    const description = document.getElementById('input-description').value;
    const priority = document.getElementById('priority-dropdown').value;
    const dueDate = document.getElementById('due-date').value;

    console.log(title, description, priority, dueDate);

    const newItem = new ListItem(title, description, dueDate, priority);
    console.log(newItem);
}

export { listAdder };
