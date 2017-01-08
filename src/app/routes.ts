import { Routes } from '@angular/router';
import { BookExistsGuard } from './guards/book-exists';
import { FindBookPageComponent } from './containers/find-book-page';
import { ResumeComponent } from './containers/resume/resume.component';
import { DetailsComponent } from './containers/details/details.component';
import { NotFoundPageComponent } from './containers/not-found-page';
import { ViewBookPageComponent } from './containers/view-book-page';
import { CollectionPageComponent } from './containers/collection-page';

export const routes: Routes = [
  {
    path: '',
    component: CollectionPageComponent
  },
  {
    path: 'project/find',
    component: FindBookPageComponent
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
    path: 'book/:id',
    canActivate: [ BookExistsGuard ],
    component: ViewBookPageComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];
