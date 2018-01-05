import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [
    new Quote(1,'Nine tenths of wisdom consists of being wise in time.'),
    new Quote(2,'Anything more than the true would be too much'),
    new Quote(3,'Its much better to do it in a way that nobody knows about it'),
    new Quote(4,`Movies have takes.But plays are like life you don't really get takes`),
    
  ]
 }
