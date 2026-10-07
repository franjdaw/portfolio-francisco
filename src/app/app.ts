import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';
import { Experience } from './components/experience/experience';
import { Contact } from './components/contact/contact';

@Component({
  imports: [Navbar, Hero, Projects, Skills, Experience, Contact],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
