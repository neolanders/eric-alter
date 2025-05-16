import { Routes } from '@angular/router';
import { ResumeComponent } from './pages/resume/resume.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundPageComponent } from './pages/not-found-page';
import { HomeComponent } from './pages/home/home.component';
import { WorkComponent } from './pages/work/work.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'work',
    component: WorkComponent
  },
  // {
  //   path: 'projects',
  //   loadChildren: './projects/projects.module#ProjectModule'
  // },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'playground',
    loadChildren: () => import('./pages/playground/playground.module').then(m => m.PlaygroundModule)
  },
  // {
  //   path: 'project/:id',
  //   canActivate: [ ProjectExistsGuard ],
  //   component: ViewProjectPageComponent
  // },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];
