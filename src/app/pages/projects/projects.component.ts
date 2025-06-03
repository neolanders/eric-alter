import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { SkeletonLoaderComponent } from '../../shared/components/skeleton-loader.component';
import { Project } from './models/project.model';
import { ProjectDetailsDialogComponent } from './project-details-dialog/project-details-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import workData from '../../../assets/data/work.json';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatDialogModule,
    SkeletonLoaderComponent,
    // ProjectDetailsDialogComponent
  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  isLoaded = false;
  projects: Project[] = workData.projects;
  personalProjects: Project[] = [];
  careerProjects: Project[] = [];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.isLoaded = true;
    // Split projects into personal and career
    this.personalProjects = this.projects.filter(project => !project.isCareer);
    this.careerProjects = this.projects.filter(project => project.isCareer);
  }

  openProjectDetails(project: Project): void {
    const dialogRef = this.dialog.open(ProjectDetailsDialogComponent, {
      data: project,
      width: '90%',
      maxWidth: '800px',
      panelClass: 'project-details-dialog',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '200ms'
    });

    dialogRef.afterClosed().subscribe(() => {
      // Optional: Add any cleanup or state reset logic here
    });
  }
} 