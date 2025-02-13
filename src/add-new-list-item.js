import { ListItem } from './create-list-item';
import { projectLibrary } from './add-new-project';

function listAdder() {
    const liAdder = document.createElement('li');
    liAdder.dataset.index = projectLibrary.length - 1;
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
    let title = document.getElementById('input-title').value;
    let description = document.getElementById('input-description').value;
    let priority = document.getElementById('priority-dropdown').value;
    let dueDate = document.getElementById('due-date').value;

    // const index = document.querySelector('[data-index]');

    // console.log(index);

    const newItem = new ListItem(title, description, dueDate, priority);
    projectLibrary[projectLibrary.length - 1].list.push(newItem);

    const li = document.querySelector(
        `li[data-index="${projectLibrary.length - 1}"]`,
    );

    // console.log(ul);

    li.before(loadListItem(newItem));

    // reset values
    title = '';
    description = '';
    priority = '';
    dueDate = '';
}

function loadListItem(itemObj) {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const listInfo = document.createElement('div');
    listInfo.classList = 'list-info';

    const listTitle = document.createElement('p');
    listTitle.classList = 'list-item-title';
    listTitle.textContent = itemObj.title;

    const listDescription = document.createElement('p');
    listDescription.classList = 'list-item-description';
    listDescription.textContent = itemObj.description;

    const listFooter = document.createElement('div');
    listFooter.classList = 'list-footer';

    const priorityBtn = document.createElement('button');
    priorityBtn.classList.add('priority-btn', `${itemObj.priority}`);
    if (itemObj.priority === 'low') {
        priorityBtn.textContent = 'Low';
    } else if (itemObj.priority === 'medium') {
        priorityBtn.textContent = 'Medium';
    } else {
        priorityBtn.textContent = 'High';
    }

    const dueDate = document.createElement('div');
    dueDate.classList = 'due-date';
    dueDate.textContent = `${itemObj.dueDate}`;

    listFooter.appendChild(priorityBtn);
    listFooter.appendChild(dueDate);

    listInfo.appendChild(listTitle);
    listInfo.appendChild(listDescription);
    listInfo.appendChild(listFooter);

    listItem.appendChild(checkbox);
    listItem.appendChild(listInfo);

    // listItems.appendChild(listItem);

    return listItem;
}

export { listAdder };
