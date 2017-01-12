import { Routes } from '@angular/router';
import { ProjectExistsGuard } from './guards/project-exists';
import { FindProjectPageComponent } from './pages/find-project-page';
import { ResumeComponent } from './pages/resume/resume.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DetailsComponent } from './pages/details/details.component';
import { NotFoundPageComponent } from './pages/not-found-page';
import { ViewProjectPageComponent } from './pages/view-project-page';
import { HomePageComponent } from './pages/home-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'project/find',
    component: FindProjectPageComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'project/:id',
    canActivate: [ ProjectExistsGuard ],
    component: ViewProjectPageComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];
