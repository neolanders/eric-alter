import {Injectable} from '@angular/core';

@Injectable()
export class AppMenuService {

    constructor() {}

    getMenu() {
        return [
            {
                label: 'Home',
                routerLink: ['']
            }, {
                label: 'About',
                routerLink: ['/about']
            }, {
                label: 'My Work',
                routerLink: ['/work']
            }, {
                label: 'Contact',
                routerLink: ['/contact']
            }, {
                label: 'Playground',
                routerLink: ['/playground']
            }, {
                label: 'Browse Projects',
                routerLink: ['/project/find']
            }, {
                label: 'Resume',
                routerLink: ['/resume']
            }];
    }
}