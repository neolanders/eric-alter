import { Routes, RouterModule }  from '@angular/router';
import { PlaygroundComponent } from './playground.component';
import { ThreejsComponent } from './threejs/threejs.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
    {
        path: '',
        component: PlaygroundComponent,
        children: [
            { path: 'threejs', component: ThreejsComponent }
        ]
    }
];

export const routing = RouterModule.forChild(routes);