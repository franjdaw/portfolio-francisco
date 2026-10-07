import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-hero',
  styleUrl: './hero.css',
  templateUrl: './hero.html',
})
export class Hero {
  profileData = {
    name: 'Francisco José Jiménez Núñez',
    role: 'Desarrollador Web Full-Stack Junior',
    specialization: 'Frontend Specialist',
    location: 'Granada, España',
    email: 'franciscojosejimenez24@gmail.com',
    phone: '+34 602 453 829',
    linkedin: 'linkedin.com/in/franciscojose-jimenez',
    summary: 'Estudiante de 2.º curso de DAW.',
    technologies: ['React', 'Angular', 'Python', 'FastAPI', 'Docker', 'Linux', 'n8n', 'PM2']
  };
}
