import './styles.css';
import { ListItem } from './create-list-item.js';
import { Project } from './create-project.js';

const itemOne = new ListItem(
    'Do the dishes',
    'Private fields can only be declared up-front in a field declaration. They cannot be created later through assigning to them, the way that normal properties can.',
    1020,
    'high',
);

const chores = new Project('Chores');

chores.list.push(itemOne);

console.log(chores);

console.log(chores.list[0].isComplete);
