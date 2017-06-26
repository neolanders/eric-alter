import { TestBed, inject } from '@angular/core/testing';
import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { ProjectsService } from './__projects.service';

describe('Service: ProjectsService', () => {
  let service: ProjectsService = null;
  let backend: MockBackend = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backendInstance, defaultOptions);
          },
          deps: [ MockBackend, BaseRequestOptions ]
        },
        ProjectsService
      ]
    });
  });

  beforeEach(inject([ProjectsService, MockBackend], (googleBooksService: ProjectsService, mockBackend: MockBackend) => {
    service = googleBooksService;
    backend = mockBackend;
  }));

  let data = {
    "title": "Book Title",
    "author": "John Smith",
    "volumeId": "12345"
  };

  let books = {
    items: [
      {id: '12345', volumeInfo: {title: 'Title'}},
      {id: '67890', volumeInfo: {title: 'Another Title'}}
    ]
  };

  let queryTitle = 'Project Title';

  it('should call the search api and return the search results', (done) => {
    backend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({
        body: JSON.stringify(books)
      });
      connection.mockRespond(new Response(options));
      expect(connection.request.method).toEqual(RequestMethod.Get);
      expect(connection.request.url).toEqual(`./assets/data/projects.json?q=${queryTitle}`);
    });

    service
      .searchProjects(queryTitle)
      .subscribe((res) => {
        expect(res).toEqual(books.items);
        done();
      });
  });

  it('should retrieve the book from the volumeId', (done) => {
    backend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({
        body: JSON.stringify(data)
      });
      connection.mockRespond(new Response(options));
      expect(connection.request.method).toEqual(RequestMethod.Get);
      expect(connection.request.url).toEqual(`./assets/data/projects.json?q=${queryTitle}`);
    });
    service
      .retrieveProject(queryTitle)
      .subscribe((response) => {
        expect(response).toEqual(data);
        done();
      });
  });

});
