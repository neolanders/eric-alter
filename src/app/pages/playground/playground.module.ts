import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { PlaygroundComponent } from './playground.component';
import { ThreejsComponent } from './threejs/threejs.component';
import { routing } from './playground.routing';

@NgModule({
    imports: [
        CommonModule,
        routing
    ],
    declarations: [
        ThreejsComponent,
        PlaygroundComponent
    ]
})
export class PlaygroundModule { }