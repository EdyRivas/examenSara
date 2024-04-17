import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumerosComponent } from '../numeros/numeros.component';
import { Numeros } from '../numeros';

@Component({
  selector: 'app-contactos',
  standalone: true,
  imports: [CommonModule, NumerosComponent],
  template: `
    <section class='cuadro'>
      <p class='titulo'>Contactos</p>
      <p style='padding:0% 3%; padding-top: 1%'>Nombre:</p>
      <div class='nombre'>
        <form style="padding:.5rem;">
          <input type="text">
        </form>
        <button class="primary" type="button">+</button>
      </div>
      <div id="contactos">
        <div class='tabla'>
          <p>Nombre</p>
          <p>Numero contacto</p>
        </div>
        <div>
          <app-numeros *ngFor="let numeros of numerosLista" [numeros]="numeros"> </app-numeros>
        </div>
      </div>
    </section>
  `,
  styleUrl: './contactos.component.css'
})
export class ContactosComponent {
 numerosLista: Numeros[] = [
    {
      "id": 1,
      "nombre": 'Ejemplo mayor',
      "numero": '614-285-4212'
    },
    {
      "id": 2,
      "nombre": 'Ejemplo mayor2',
      "numero": '614-854-0972'
    },
    {
      "id": 3,
      "nombre": 'Ejemplo mayor3',
      "numero": '652-123-7526'
    },
    {
      "id": 4,
      "nombre": 'Ejemplo mayor4',
      "numero": '111-234-4555'
    }
 ]
}
