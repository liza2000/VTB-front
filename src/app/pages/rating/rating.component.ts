import { Component, OnInit } from '@angular/core';
import {HelperUtilService} from "../../shared/services/helper-util.service";
import {Employee} from "../../shared/model/employee.model";


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor(private helper: HelperUtilService) { }

  user?:Employee = employee

  ngOnInit(): void {
    this.helper.getAppData().subscribe(a=>this.user=a.employee)
  }

}
