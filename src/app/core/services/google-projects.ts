import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Project } from '../../models/project';

@Injectable()
export class GoogleBooksService {
  private API_PATH = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) {}

  searchBooks(queryTitle: string): Observable<Project[]> {
    return this.http
      .get<{ items: Project[] }>(`${this.API_PATH}?q=${queryTitle}`)
      .pipe(map(books => books.items || []));
  }

  retrieveBook(volumeId: string): Observable<Project> {
    return this.http.get<Project>(`${this.API_PATH}/${volumeId}`);
  }
}
