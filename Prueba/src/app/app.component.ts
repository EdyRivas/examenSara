import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ContactosComponent} from './contactos/contactos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactosComponent],
  template: `
    <main>
      <header class="marca">
        <p class="logo">...</p>
      </header>
      <section class="content">
        <app-contactos></app-contactos>
      </section>
    </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '...';
}
