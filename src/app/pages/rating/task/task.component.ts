import {Component, Input, OnInit} from '@angular/core';
import {EmployeeTask} from "../../../shared/model/task/employee-task.model";
import {HelperUtilService} from "../../../shared/services/helper-util.service";
import {Task} from "../../../shared/model/task/task.model";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input()
  employeeTask: EmployeeTask = new EmployeeTask();

  lvls = []
  constructor(private helper: HelperUtilService) {

  }

  ngOnInit(): void {
    this.helper.getAppData().subscribe(appData => {
      this.lvls = appData.lvls;
    })
  }

  getTitleTask():string {

    if (!this.employeeTask.task) return ''
    switch (this.employeeTask.type) {
      case 'COURSE': return `Записаться на ${this.employeeTask.task?.max} курсов`;
      case 'CONFERENCE': return `Посетить  ${this.employeeTask.task?.max} конференций`;
    }
    return ''
  }
}
