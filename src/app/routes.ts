import { Routes } from '@angular/router';
import { ProjectExistsGuard } from './guards/project-exists';
import { FindProjectPageComponent } from './pages/find-project-page';
import { ResumeComponent } from './pages/resume/resume.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DetailsComponent } from './pages/details/details.component';
import { NotFoundPageComponent } from './pages/not-found-page';
import { ViewProjectPageComponent } from './pages/view-project-page';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
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
    path: 'playground',
    loadChildren: './pages/playground/playground.module#PlaygroundModule' // -- for aot compilation
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
