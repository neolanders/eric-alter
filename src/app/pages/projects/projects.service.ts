import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from '../../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
    private API_PATH = './assets/data/projects.json';

    constructor(private http: HttpClient) {}

    searchProjects(queryTitle: string): Observable<Project[]> {
        return this.http.get<any>(`${this.API_PATH}?q=${queryTitle}`)
            .pipe(map(res => res.items || []));
    }

    retrieveProject(volumeId: string): Observable<Project> {
        return this.http.get<Project>(`${this.API_PATH}/${volumeId}`);
    }
} 