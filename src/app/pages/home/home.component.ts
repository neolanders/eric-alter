import { Component,
         trigger,
         transition,
         style,
         animate } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger(
        'textAnnimation',
        [
          transition(
              ':enter', [
                style({transform: 'translateX(100%)', opacity: 0}),
                animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
              ]
          ),
          transition(
              ':leave', [
                style({transform: 'translateX(0)', 'opacity': 1}),
                animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
              ]
          )]
    )
  ]
})
export class HomeComponent {}
