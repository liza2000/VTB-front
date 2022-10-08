import {Component, Input, OnInit} from '@angular/core';
import {EmployeeTask} from "../../../shared/model/task/employee-task.model";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {


  @Input()
  tasks:EmployeeTask[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
