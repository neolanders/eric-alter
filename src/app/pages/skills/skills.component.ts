import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './skills.component.html', 
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  skills = [
    {
      category: 'Front-End',
      items: [
        {
          name: 'JavaScript',
          icon: 'assets/icons/javascript.svg',
          description: 'Core language for web development',
          link: "https://www.w3schools.com/js",
        },
        {
          name: 'TypeScript',
          icon: 'assets/icons/typescript.svg',
          description: 'Strongly typed JavaScript',
          link: "https://www.typescriptlang.org/",
        },
        {
          name: 'React',
          icon: 'assets/icons/react.svg',
          description: 'UI library for building interfaces',
          link: "https://react.dev/",
        },
        {
          name: 'Angular',
          icon: 'assets/icons/angular.svg',
          description: 'Platform for building web applications',
          link: "https://angular.dev/",
        },
        {
          name: 'HTML5',
          icon: 'assets/icons/html5.svg',
          description: 'Markup language for web content',
          link: "https://www.w3schools.com/html/",
        },
        {
          name: 'CSS3',
          icon: 'assets/icons/css3.svg',
          description: 'Styling language for web design',
          link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        },
        {
          name: 'Sass',
          icon: 'assets/icons/sass.svg',
          description: 'CSS preprocessor for better styling',
          link: "https://sass-lang.com/",
        },
        {
          name: 'Bootstrap',
          icon: 'assets/icons/bootstrap.svg',
          description: 'Powerful, extensible, and feature-packed frontend toolkit.',
          link: "https://getbootstrap.com/",
        },
        {
          name: 'MaterialUI',
          icon: 'assets/icons/materialui.svg',
          description: 'A React UI library implementing Google\'s Material Design.',
          link: "https://mui.com/material-ui/getting-started/",
        },
        {
          name: 'Next.js',
          icon: 'assets/icons/nextjs.svg',
          description: 'A React framework for hybrid static & server rendering.',
          link: "https://nextjs.org/",
        },
        {
          name: 'Redux',
          icon: 'assets/icons/sass.svg',
          description: 'A predictable state container for JavaScript apps.',
          link: "https://redux.js.org/",
        },
        {
          name: 'Tailwind',
          icon: 'assets/icons/tailwind.svg',
          description: 'A utility-first CSS framework for building custom designs.',
          link: "https://tailwindcss.com/docs/installation/using-vite",
        },
        {
          name: 'Sass',
          icon: 'assets/icons/sass.svg',
          description: 'A preprocessor scripting language that extends CSS.',
          link: "https://sass-lang.com/documentation/",
        }
      ]
    },
    {
      category: 'Back-End',
      items: [
        {
          name: 'Node.js',
          icon: 'assets/icons/nodejs.svg',
          description: 'JavaScript runtime for server-side',
          link: "https://nodejs.org/en",
        },
        {
          name: 'Python',
          icon: 'assets/icons/python.svg',
          description: 'Versatile programming language',
          link: "https://www.python.org/",
        },
        {
          name: 'PHP',
          icon: 'assets/icons/php.svg',
          description: 'A popular general-purpose scripting language',
          link: "https://www.php.net",
        },
        {
          name: 'MySQL',
          icon: 'assets/icons/mysql.svg',
          description: 'Database query language',
          link: "https://docs.djangoproject.com/",
        },
        {
          name: 'MongoDB',
          icon: 'assets/icons/mongodb.svg',
          description: 'NoSQL database',
          link: "https://www.mongodb.com/",
        },
      ]
    },
    {
      category: 'DevOps & Tools',
      items: [
        {
          name: 'Git',
          icon: 'assets/icons/git.svg',
          description: 'Version control system',
          link: "https://git-scm.com/",
        },
        {
          name: 'Docker',
          icon: 'assets/icons/docker.svg',
          description: 'Containerization platform',
          link: "https://www.docker.com/",
        },
        {
          name: 'AWS',
          icon: 'assets/icons/aws.svg',
          description: 'Cloud computing platform',
          link: "https://aws.amazon.com/",
        },
        {
          name: 'Kubernetes',
          icon: 'assets/icons/kubernetes.svg',
          description: 'Container orchestration',
          link: "https://kubernetes.io/",
        },
        {
          name: 'Jenkins',
          icon: 'assets/icons/jenkins.svg',
          description: 'CI/CD automation',
          link: "https://www.jenkins.io/",
        },
        {
          name: 'Jira',
          icon: 'assets/icons/jira.svg',
          description: 'Project management tool',
          link: "https://www.atlassian.com/software/jira",
        }
      ]
    }
  ];
} 