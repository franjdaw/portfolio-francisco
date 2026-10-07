import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-experience',
  styleUrl: './experience.css',
  templateUrl: './experience.html',
})
export class Experience {
  experiences = [
    {
      type: 'work',
      title: 'Prácticas en DATASUR',
      company: 'DATASUR',
      period: '2024 - Presente',
      description: 'Desarrollo de plataforma educativa con inteligencia artificial. Implementación de APIs con FastAPI, contenedorización con Docker y automatización de procesos con n8n.',
      technologies: ['Python', 'FastAPI', 'Docker', 'n8n', 'REST APIs']
    },
    {
      type: 'education',
      title: '2.º Curso DAW',
      company: 'EIG Education / Escuela Internacional de Gerencia',
      period: '2023 - Presente',
      description: 'Desarrollo de Aplicaciones Web. Formación integral en desarrollo frontend y backend, bases de datos y arquitectura de aplicaciones.',
      technologies: ['Angular', 'React', 'PHP', 'SQL', 'Desarrollo Web']
    },
    {
      type: 'work',
      title: 'Gestor Administrativo',
      company: 'Ayuntamiento de Jódar',
      period: '2021 - 2023',
      description: 'Gestión administrativa y atención al ciudadano. Desarrollo de habilidades de comunicación, organización y trabajo en equipo.',
      technologies: ['Gestión', 'Comunicación', 'Trabajo en equipo']
    }
  ];
}
