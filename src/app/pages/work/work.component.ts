import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  spaceScreens: Array<any>;

  constructor(private http:Http) {}

  ngOnInit() {
    this.http.get('./assets/data/projects.json')
        .map(response => response.json().screenshots)
        .subscribe(res => this.spaceScreens = res);
  }

  likeMe(i) {
    if (this.spaceScreens[i].liked == 0)
      this.spaceScreens[i].liked = 1;
    else
      this.spaceScreens[i].liked = 0;
  }
}
