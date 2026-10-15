import { Component } from '@angular/core';
import { Logo } from '../logo/logo';
import { Buscador } from '../buscador/buscador';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [Logo, Buscador],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {}