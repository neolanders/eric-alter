import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Project {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  techStack: string[];
  imageUrl?: string;
  responsibilities?: string[];
  achievements?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 'sensorup',
      title: 'Lead Front-End Developer',
      company: 'SensorUp',
      period: '2019 - 2020',
      description: 'Led the development of a complex React-based front-end stack. Improved testing infrastructure, optimized performance with web workers, and enhanced team communication processes.',
      techStack: ['React', 'TypeScript', 'Cypress', 'Web Workers', 'Material-UI'],
      imageUrl: 'https://media.licdn.com/dms/image/v2/C560BAQF7WHesi3d5cA/company-logo_100_100/company-logo_100_100/0/1630574784235/sensorup_inc__logo?e=1753315200&v=beta&t=h7xvn9j4SyivI0uYpTHWsm3WnyzZwCtXhGVuJj_SrlY',
      responsibilities: [
        'Led a team of 5 front-end developers',
        'Architected and implemented a new testing strategy',
        'Optimized application performance using web workers',
        'Improved team communication and development processes'
      ],
      achievements: [
        'Reduced test execution time by 60%',
        'Improved application performance by 40%',
        'Successfully delivered 3 major releases on schedule',
        'Mentored junior developers and improved team productivity'
      ]
    },
    {
      id: 'tucows',
      title: 'Senior Front-End Developer',
      company: 'Tucows',
      period: '2017 - 2019',
      description: 'Developed and maintained multiple web applications using Angular and React. Implemented responsive designs and optimized application performance.',
      techStack: ['Angular', 'React', 'TypeScript', 'Sass', 'RxJS'],
      imageUrl: '/assets/images/tucows.jpg',
      responsibilities: [
        'Developed and maintained multiple web applications',
        'Implemented responsive designs',
        'Optimized application performance',
        'Collaborated with cross-functional teams'
      ],
      achievements: [
        'Improved application load time by 50%',
        'Implemented automated testing reducing bugs by 30%',
        'Successfully migrated legacy applications to modern frameworks',
        'Mentored junior developers and conducted code reviews'
      ]
    },
    {
      id: 'blackberry',
      title: 'Software Developer',
      company: 'BlackBerry',
      period: '2015 - 2017',
      description: 'Worked on enterprise-level applications and services. Contributed to both front-end and back-end development using various technologies.',
      techStack: ['Java', 'JavaScript', 'HTML5', 'CSS3', 'Spring Boot'],
      imageUrl: '/assets/images/blackberry.jpg',
      responsibilities: [
        'Developed enterprise-level applications',
        'Contributed to both front-end and back-end development',
        'Implemented security best practices',
        'Collaborated with cross-functional teams'
      ],
      achievements: [
        'Successfully delivered multiple enterprise applications',
        'Improved application security and reduced vulnerabilities',
        'Implemented automated testing and CI/CD pipelines',
        'Received recognition for outstanding performance'
      ]
    }
  ];

  constructor() {}

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getProjectById(id: string): Observable<Project | undefined> {
    return of(this.projects.find(project => project.id === id));
  }
} 