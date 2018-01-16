import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import { Project } from '../models/project';


@Injectable()
export class ProjectsService {
    // private API_PATH: string = './assets/data/projects.json'; // https://www.googleapis.com/books/v1/volumes';
    //
    // constructor(private http: Http) {}
    //
    // searchProjects(queryTitle: string): Observable<Project[]> {
    //     return this.http.get(`${this.API_PATH}?q=${queryTitle}`)
    //         .map(res => res.json().items || []);
    // }
    //
    // retrieveProject(volumeId: string): Observable<Project> {
    //     return this.http.get(`${this.API_PATH}/${volumeId}`)
    //         .map(res => res.json());
    // }
}
