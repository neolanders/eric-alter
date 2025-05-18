import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

interface Skill {
  label: string;
  icon: string;
  popup: string;
}

@Component({
  selector: 'app-skills-bubbles',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './skills-bubbles.component.html',
  styleUrls: ['./skills-bubbles.component.scss']
})
export class SkillsBubblesComponent implements OnInit {
  skills: Skill[] = [
    {
      label: "Frontend Development",
      icon: "code",
      popup: "Expert in React, Next.js, TypeScript, and modern frontend technologies. Building responsive and performant web applications."
    },
    {
      label: "Quick Learner",
      icon: "school",
      popup: "Adaptable to new technologies and frameworks. Strong problem-solving skills and ability to quickly grasp complex concepts."
    },
    {
      label: "Team Player",
      icon: "group",
      popup: "Excellent collaboration skills. Experience in agile methodologies and cross-functional team environments."
    },
    {
      label: "Project Management",
      icon: "settings",
      popup: "Proven track record in managing complex projects, coordinating teams, and delivering successful outcomes."
    },
    {
      label: "Backend Development",
      icon: "build",
      popup: "Proficient in Node.js, Python, and database management. Building scalable and secure backend systems."
    },
    {
      label: "Growth",
      icon: "trending_up",
      popup: "Continuous improvement mindset. Always seeking new challenges and opportunities to expand skills."
    },
    {
      label: "Communication",
      icon: "chat",
      popup: "Strong verbal and written communication skills. Effective at conveying technical concepts to diverse audiences."
    },
    {
      label: "Rocket Power",
      icon: "rocket_launch",
      popup: "High-performance coding and optimization skills. Focus on delivering efficient and scalable solutions."
    }
  ];

  hovered: number | null = null;
  clicked: number | null = null;
  isHolding = false;
  isMobile = false;
  radius = 180;
  bubbleContainerSizeOffset = 100;
  bubbleSizeClass = 'w-28 h-28';
  iconSizeClass = 'w-12 h-12';

  @HostListener('window:resize')
  onResize() {
    this.checkMobile();
  }

  ngOnInit() {
    this.checkMobile();
  }

  private checkMobile() {
    this.isMobile = window.innerWidth < 768;
    this.radius = this.isMobile ? 100 : 180;
    this.bubbleContainerSizeOffset = this.isMobile ? 60 : 100;
    this.bubbleSizeClass = this.isMobile ? 'w-20 h-20' : 'w-28 h-28';
    this.iconSizeClass = this.isMobile ? 'w-10 h-10' : 'w-12 h-12';
  }

  handleMouseDown(index: number) {
    this.isHolding = true;
    this.clicked = index;
  }

  handleMouseUp() {
    this.isHolding = false;
    this.clicked = null;
  }

  getContainerSize(): number {
    return this.radius * 2 + this.bubbleContainerSizeOffset;
  }

  getBubblePosition(index: number): { x: number, y: number } {
    const angle = (2 * Math.PI * index) / this.skills.length;
    const centerOffset = this.bubbleContainerSizeOffset / 2;
    const x = this.radius + centerOffset + this.radius * Math.cos(angle);
    const y = this.radius + centerOffset + this.radius * Math.sin(angle);
    return { x, y };
  }

  getLineCoordinates(index: number): { x1: number, y1: number, x2: number, y2: number } {
    const angle1 = (2 * Math.PI * index) / this.skills.length;
    const angle2 = (2 * Math.PI * ((index + 1) % this.skills.length)) / this.skills.length;
    const centerOffset = this.bubbleContainerSizeOffset / 2;
    const x1 = this.radius + centerOffset + this.radius * Math.cos(angle1);
    const y1 = this.radius + centerOffset + this.radius * Math.sin(angle1);
    const x2 = this.radius + centerOffset + this.radius * Math.cos(angle2);
    const y2 = this.radius + centerOffset + this.radius * Math.sin(angle2);
    return { x1, y1, x2, y2 };
  }
} 