import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

interface Project {
  img: string;
  description: string;
  liked: number;
}

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  spaceScreens: Project[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<{screenshots: Project[]}>('./assets/data/projects.json')
      .subscribe(res => this.spaceScreens = res.screenshots);
  }

  likeMe(i: number): void {
    if (this.spaceScreens[i].liked === 0) {
      this.spaceScreens[i].liked = 1;
    } else {
      this.spaceScreens[i].liked = 0;
    }
  }
}
