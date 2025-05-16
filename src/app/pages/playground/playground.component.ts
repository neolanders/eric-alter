import { Component } from '@angular/core';
import { ThreejsComponent } from './threejs/threejs.component';

@Component({
  selector: 'app-playground',
  template: `
    <div class="playground-container">
      <h1>Playground</h1>
      <app-threejs></app-threejs>
    </div>
  `,
  styles: [`
    .playground-container {
      padding: 2rem;
      height: 100vh;
      background: #f5f5f5;
    }
    h1 {
      margin-bottom: 2rem;
      color: #333;
    }
  `]
})
export class PlaygroundComponent {} 