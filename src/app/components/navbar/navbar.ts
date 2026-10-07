import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  isMenuOpen = false;
  navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Contacto', href: '#contact' }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
