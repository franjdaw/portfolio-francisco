import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class Projects {
  projects = [
    {
      title: 'Plataforma Educativa con IA',
      description: 'Desarrollo de plataforma educativa integrando inteligencia artificial. Implementación de APIs REST, Docker para contenedorización y automatización de procesos con n8n.',
      technologies: ['Python', 'FastAPI', 'Docker', 'n8n', 'REST APIs'],
      featured: true,
      company: 'Prácticas en Datasur'
    },
    {
      title: 'MoodCloud - Cloud & Hosting',
      description: 'Proyecto propio de servicios de cloud y hosting. Gestión de servidores Linux, despliegue con Docker y PM2, y virtualización de recursos.',
      technologies: ['Linux', 'Docker', 'PM2', 'Virtualización', 'Cloud'],
      featured: false,
      company: 'Proyecto Propio'
    },
    {
      title: 'Desarrollador Web Freelance',
      description: 'Desarrollo de aplicaciones web personalizadas para clientes. Implementación de frontend con React y Angular, gestión de bases de datos y despliegue en hosting.',
      technologies: ['React', 'Angular', 'Bases de datos', 'Hosting', 'UI/UX'],
      featured: false,
      company: 'Freelance'
    }
  ];
}
