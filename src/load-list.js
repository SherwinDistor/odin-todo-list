function loadList(array, index) {
    const list = document.createElement('div');
    list.id = 'list-container';

    const listHeader = document.createElement('h2');
    listHeader.textContent = array[index].name;

    const listItems = document.createElement('ul');

    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const listInfo = document.createElement('div');
    listInfo.classList = 'list-info';

    const listTitle = document.createElement('p');
    listTitle.classList = 'list-item-title';
    listTitle.textContent = 'Eggs';

    const listDescription = document.createElement('p');
    listDescription.classList = 'list-item-description';
    listDescription.textContent =
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit.';

    const listFooter = document.createElement('div');
    listFooter.classList = 'list-footer';

    const priorityBtn = document.createElement('button');
    priorityBtn.classList.add('priority-btn', 'high');
    priorityBtn.textContent = 'High';

    const dueDate = document.createElement('div');
    dueDate.classList = 'due-date';
    dueDate.textContent = '9/21';

    // const newListItem = document.createElement('div');
    // newListItem.classList = 'new-list-item';

    listFooter.appendChild(priorityBtn);
    listFooter.appendChild(dueDate);

    listInfo.appendChild(listTitle);
    listInfo.appendChild(listDescription);
    listInfo.appendChild(listFooter);

    listItem.appendChild(checkbox);
    listItem.appendChild(listInfo);

    listItems.appendChild(listItem);

    // listItems.appendChild(listAdder());

    list.appendChild(listHeader);
    list.appendChild(listItems);

    // list.appendChild(newListItem());

    return list;
}

export { loadList };
