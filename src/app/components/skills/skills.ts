import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-skills',
  styleUrl: './skills.css',
  templateUrl: './skills.html',
})
export class Skills {
  skillCategories = [
    {
      name: 'Frontend',
      icon: '🎨',
      skills: ['React', 'Angular', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind/CSS']
    },
    {
      name: 'Backend & Cloud',
      icon: '⚙️',
      skills: ['Python', 'FastAPI', 'REST APIs', 'Linux', 'Docker', 'PM2', 'n8n']
    },
    {
      name: 'Herramientas & Soft Skills',
      icon: '🛠️',
      skills: ['Git', 'Bases de datos', 'Inglés (Medio-Avanzado)', 'Autonomía', 'Trabajo en equipo']
    }
  ];
}
