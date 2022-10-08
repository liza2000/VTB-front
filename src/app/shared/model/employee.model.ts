import {EmployeeTask} from "./task/employee-task.model";

interface IEmployee {
    id: number;
    name: string;
    tasks: EmployeeTask[]
}

export class Employee {
    id: number;
    name: string;
    tasks: EmployeeTask[];
    constructor(emp?: IEmployee) {
        this.id = emp && emp.id || -1;
        this.name = emp && emp.name ||'';
        this.tasks = []
    }
}
