export interface Project {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  link: string;
  logo: {
    name: string;
    icon: string;
  };
  stacks: {
    name: string;
    icon: string;
  }[];
  features: string[];
  challenges: string[];
  role: string;
  duration: string;
  isCareer: boolean;
} 

  