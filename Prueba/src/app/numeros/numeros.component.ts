import { Component, Input, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Numeros } from '../numeros';

@Component({
  selector: 'app-numeros',
  standalone: true,
  imports: [],
  template: `
      <div>
        <p class="lista-nombre">{{numeros.nombre}}</p>
        <p class="lista-num">{{numeros.numero}}</p>
      </div> 
  `,
  styleUrl: './numeros.component.css'
})
export class NumerosComponent {
  @Input() numeros!:Numeros;
}
