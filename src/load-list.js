import { listAdder } from './add-new-list-item';

function loadList(array, index) {
    const list = document.createElement('div');
    list.id = 'list-container';

    const listHeader = document.createElement('h2');
    listHeader.textContent = array[index].name;

    const listItems = document.createElement('ul');

    listItems.appendChild(listAdder());

    list.appendChild(listHeader);
    list.appendChild(listItems);

    // list.appendChild(newListItem());

    return list;
}

export { loadList };
