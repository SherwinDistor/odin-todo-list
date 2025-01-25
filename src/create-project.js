class CreateProject {
    constructor(name) {
        this.name = name;
        this.list = new Array();
    }
}

export { CreateProject };

const biology = new CreateProject('Biology');

biology.list.push('hello');

console.log(biology);
