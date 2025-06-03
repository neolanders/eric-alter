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
          link: "https://docs.djangoproject.com/",
        },
        {
          name: 'TypeScript',
          icon: 'assets/icons/typescript.svg',
          description: 'Strongly typed JavaScript',
          link: "https://docs.djangoproject.com/",
        },
        {
          name: 'React',
          icon: 'assets/icons/react.svg',
          description: 'UI library for building interfaces',
          link: "https://docs.djangoproject.com/",
        },
        {
          name: 'Angular',
          icon: 'assets/icons/angular.svg',
          description: 'Platform for building web applications',
          link: "https://docs.djangoproject.com/",
        },
        {
          name: 'HTML5',
          icon: 'assets/icons/html5.svg',
          description: 'Markup language for web content',
          link: "https://docs.djangoproject.com/",
        },
        {
          name: 'CSS3',
          icon: 'assets/icons/css3.svg',
          description: 'Styling language for web design',
          link: "https://docs.djangoproject.com/",
        },
        {
          name: 'Sass',
          icon: 'assets/icons/sass.svg',
          description: 'CSS preprocessor for better styling',
          link: "https://docs.djangoproject.com/",
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
          link: "https://docs.djangoproject.com/",
        },
        {
          name: 'Python',
          icon: 'assets/icons/python.svg',
          description: 'Versatile programming language',
          link: "https://docs.djangoproject.com/",
        },
        {
          name: 'Java',
          icon: 'assets/icons/java.svg',
          description: 'Enterprise-level programming',
          link: "https://docs.djangoproject.com/",
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
          link: "https://docs.djangoproject.com/",
        },
        {
          name: 'Firebase',
          icon: 'assets/icons/firebase.svg',
          description: 'Backend-as-a-Service platform',
          link: "https://docs.djangoproject.com/",
        }
      ]
    },
    {
      category: 'DevOps & Tools',
      items: [
        {
          name: 'Git',
          icon: 'assets/icons/git.svg',
          description: 'Version control system',
          link: "https://docs.djangoproject.com/",
        },
        {
          name: 'Docker',
          icon: 'assets/icons/docker.svg',
          description: 'Containerization platform',
          link: "https://docs.djangoproject.com/",
        },
        {
          name: 'AWS',
          icon: 'assets/icons/aws.svg',
          description: 'Cloud computing platform',
          link: "https://docs.djangoproject.com/",
        },
        {
          name: 'Kubernetes',
          icon: 'assets/icons/kubernetes.svg',
          description: 'Container orchestration',
          link: "https://docs.djangoproject.com/",
        },
        {
          name: 'Jenkins',
          icon: 'assets/icons/jenkins.svg',
          description: 'CI/CD automation',
          link: "https://docs.djangoproject.com/",
        },
        {
          name: 'Jira',
          icon: 'assets/icons/jira.svg',
          description: 'Project management tool',
          link: "https://docs.djangoproject.com/",
        }
      ]
    }
  ];
} 