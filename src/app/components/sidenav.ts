import { Component, Input } from '@angular/core';

@Component({
  selector: 'portfolio-sidenav',
  template: `
    <md-sidenav [opened]="open">
      <md-nav-list>
      <!--(activate)="closeSidenav()"-->
        <portfolio-nav-item routerLink="/about" icon="create" hint="About">
          About
        </portfolio-nav-item>
        <portfolio-nav-item routerLink="/work" icon="book" hint="View my works">
          My Work
        </portfolio-nav-item>
        <!--<portfolio-nav-item (activate)="closeSidenav()" routerLink="/" icon="book" hint="View my works">-->
          <!--My Work-->
        <!--</portfolio-nav-item>-->
        <portfolio-nav-item routerLink="/project/find" icon="search" hint="Find my projects">
          Browse Projects
        </portfolio-nav-item>
        <portfolio-nav-item routerLink="/contact" icon="mail" hint="Contact me">
          Contact
        </portfolio-nav-item>
        <portfolio-nav-item routerLink="/playground" icon="mode" hint="Playground">
          Playground
        </portfolio-nav-item>
        <portfolio-nav-item routerLink="/resume" icon="book" hint="My Resume">
          Resume
        </portfolio-nav-item>
      </md-nav-list>
    </md-sidenav>
  `,
  styles: [`
    md-sidenav {
      width: 300px;
    }
  `]
})
export class SidenavComponent {
  @Input() open = false;
}
