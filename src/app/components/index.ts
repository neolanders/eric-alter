import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MatButtonModule,
//          MatCardModule,
//          MatIconModule,
//          MatListModule,
//          MatToolbarModule,
//          MatSidenavModule,
//          MatChipsModule,
//          MatInputModule,
//          MatProgressSpinnerModule } from '@angular/material';
import { CustomMaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProjectAuthorsComponent } from './project-authors';
import { ProjectDetailComponent } from './project-detail';
import { ProjectPreviewComponent } from './project-preview';
import { ProjectPreviewListComponent } from './project-preview-list';
import { ProjectSearchComponent } from './project-search';
import { NavItemComponent } from './nav-item';
import { SidenavComponent } from './sidenav';
import { ToolbarComponent } from './toolbar';
import { PipesModule } from '../pipes';


export const COMPONENTS = [
  ProjectAuthorsComponent,
  ProjectDetailComponent,
  ProjectPreviewComponent,
  ProjectPreviewListComponent,
  ProjectSearchComponent,
  NavItemComponent,
  SidenavComponent,
  ToolbarComponent,
];


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // MaterialModule,
    // MatInputModule,
    // MatIconModule,
    // MatChipsModule,
    // MatSidenavModule,
    // MatListModule,
    // MatButtonModule,
    // MatToolbarModule,
    // MatProgressSpinnerModule,
    // MatCardModule,
    CustomMaterialModule,
    RouterModule,
    PipesModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ComponentsModule { }
