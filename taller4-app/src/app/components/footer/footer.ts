import { Component } from '@angular/core';
import { Footer1 } from '../footer1/footer1';
import { Footer2 } from '../footer2/footer2';
import { Footer3 } from '../footer3/footer3';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [Footer1, Footer2, Footer3],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {}