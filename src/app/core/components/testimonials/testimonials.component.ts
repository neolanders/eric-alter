import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  date: string;
  linkedinUrl?: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  template: `
    <div class="testimonials-container">
      <h2>Testimonials</h2>
      <div class="testimonials-grid" [@staggerAnimation]>
        <mat-card class="testimonial-card" *ngFor="let testimonial of testimonials" [@fadeIn]>
          <mat-card-content>
            <div class="quote">
              <mat-icon>format_quote</mat-icon>
              <p>{{ testimonial.quote }}</p>
            </div>
            <div class="author">
              <img [src]="testimonial.avatar" [alt]="testimonial.name">
              <div class="author-info">
                <h3>{{ testimonial.name }}</h3>
                <p>{{ testimonial.title }}</p>
                <p class="company">{{ testimonial.company }}</p>
              </div>
            </div>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .testimonials-container {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    h2 {
      text-align: center;
      margin-bottom: 2rem;
      color: #333;
    }

    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .testimonial-card {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-5px);
      }
    }

    .quote {
      margin-bottom: 1.5rem;

      mat-icon {
        color: #1976d2;
        font-size: 2rem;
        width: 2rem;
        height: 2rem;
        margin-bottom: 0.5rem;
      }

      p {
        color: #444;
        font-size: 1.1rem;
        line-height: 1.6;
        font-style: italic;
      }
    }

    .author {
      display: flex;
      align-items: center;
      gap: 1rem;

      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        object-fit: cover;
      }

      .author-info {
        h3 {
          margin: 0;
          color: #333;
          font-size: 1.2rem;
        }

        p {
          margin: 0.25rem 0;
          color: #666;
          font-size: 0.9rem;

          &.company {
            color: #1976d2;
            font-weight: 500;
          }
        }
      }
    }
  `],
  animations: [
    trigger('staggerAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('0.3s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.3s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      quote: "I had the pleasure to work with Eric on several projects. This gave me the opportunity to appreciate his abilities to work on complex, end-to-end, fullstack projects. His attention to detail, structured approach and problem solving skills were key in making those projects successful. He also never shies away from learning new tech stack elements and systems, and is great with collaborating in a team. I highly recommend him to any software engineering team looking to strengthen their skills.",
      author: "Romain Criton",
      title: "AI & Software",
      company: "Darwin Homes",
      date: "April 4, 2025",
      linkedinUrl: "https://www.linkedin.com/in/romaincriton/",
      avatar: "https://media.licdn.com/dms/image/v2/C5603AQES4mOSlbxzIw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1516275578301?e=1753315200&v=beta&t=eNXmeQzZoe-7KlZyhz050SIdlzVE6_wd9uF8SVEJF6g",
      name: "Romain Criton"
    },
    {
      quote: "I had the privilege of working alongside Eric for over a year, and he consistently stood out for his commitment and expertise. As a frontend developer, Eric is incredibly fast at building high-quality pages and efficiently handling challenging tasks. He is always ready to assist and goes the extra mile to support the team. His positive and proactive approach make him a valuable asset to any team",
      author: "Vinicius Gaviraghi (Vini)",
      title: "Passionate Software Engineer Manager",
      company: "Darwin Homes",
      date: "March 29, 2025",
      linkedinUrl: "https://www.linkedin.com/in/viniciusgaviraghi/",
      avatar: "https://media.licdn.com/dms/image/v2/C4D03AQHaU3llljtipA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1574815436689?e=1753315200&v=beta&t=FNsaINKewNLzcsiCQhMGkSpg18M_bF_OCujl3a1pvOo",
      name: "Vinicius Gaviraghi"
    },
    {
      quote: "It was a pleasure to work with Eric. I admired his attention to detail and ability to ask incisive questions that improved product and process.",
      author: "Tim Rauenbusch",
      title: "Ph.D. in Computer Science",
      company: "Global Relay",
      date: "July 19, 2023",
      linkedinUrl: "https://www.linkedin.com/in/timrauenbusch/",
      avatar: "https://media.licdn.com/dms/image/v2/C5603AQFZKoU-RLlPlA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1546855781172?e=1753315200&v=beta&t=JkLuC1N8FKw32ewq3SOE5E9ph0AkFDOqAjXSamv-37w",
      name: "Tim Rauenbusch"
    },
    {
      quote: "Eric joined SensorUp as our Lead Front-End Developer to drive our complex React-based front-end stack. In his time here, he quickly got up to speed demonstrating technical capability across many areas of our front-end system. He took a hands-on approach to improve our Cypress based testing infrastructure, dealt with complex technical debt in our workflow building canvas, optimized performance bottlenecks by implementing web-workers and improved our communication and planning processes across the front-end of the product. I highly recommend Eric for any senior/lead level front-end position.",
      author: "Spencer Cox",
      title: "Making things better for customers!",
      company: "Sensor Up",
      date: "March 26, 2020",
      linkedinUrl: "https://www.linkedin.com/in/spencercox/",
      avatar: "https://media.licdn.com/dms/image/v2/C4E03AQFErjCKqDqctw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1579708493398?e=1753315200&v=beta&t=2XAw3yUuHj6GjHij2IbM3RP_7e2Fokt-USIbmsFc9d4",
      name: "Spencer Cox"
    },
    {
      quote: "Eric is hard worker and put his %110 effort to deliver high quality work.",
      author: "Farshad Ahvazi",
      title: "Senior R&D Manager",
      company: "Central One Credit Union",
      date: "January 11, 2018",
      linkedinUrl: "https://www.linkedin.com/in/farshadahvazi/",
      avatar: "https://media.licdn.com/dms/image/v2/C5603AQElAMjaH9dMSw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1516340949621?e=1753315200&v=beta&t=SzMC8Br9Bt9qM5Y0ZDUUBUn8f771POY_02Vzs01pzN0",
      name: "Farshad Ahvazi"
    },
    {
      quote: "Eric is a very enthusiastic, hard-working, dedicated, and talented web developer. He learns new technologies quickly, and understands how to apply them. Aside from his technical skills, Eric is a team player, and very easy to get along with. Eric is surely an asset to have on any team.",
      author: "Jason Yonk",
      title: "Full Stack Engineering Leader and Manager",
      company: "Cisco Israel",
      date: "June 8, 2016",
      linkedinUrl: "https://www.linkedin.com/in/jasonyonk/",
      avatar: "https://media.licdn.com/dms/image/v2/C5103AQEyV_Ok3L6Zgg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1516315756161?e=1753315200&v=beta&t=ePTZpWtCjp7eegoQlXsLSQKIWhXH92iDd4jjtZMTJN8",
      name: "Jason Yonk"
    }
  ];
} 