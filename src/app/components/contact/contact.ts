import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  email = 'franciscojosejimenez24@gmail.com';
  phone = '+34 602 453 829';
  linkedin = 'linkedin.com/in/franciscojose-jimenez';
}
