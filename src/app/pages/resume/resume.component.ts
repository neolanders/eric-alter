import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  public pieChartLabels:string[] = [
    'CSS',
    'Javascript',
    'Typescript',
    'PHP',
    'Less / Sass'];
  public pieChartData:number[] = [
      300,
      500,
      100,
      50,
      50];
  public pieChartType:string = 'pie';


  constructor() { }

  ngOnInit() {

  }

}
