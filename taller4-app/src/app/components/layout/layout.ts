import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Content } from '../content/content';
import { Sidebar } from '../sidebar/sidebar';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [Header, Content, Sidebar, Footer],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {}