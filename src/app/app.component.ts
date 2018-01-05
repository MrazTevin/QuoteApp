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
    new Quote(2,'Anything more than the true would be too much.'),
    new Quote(3,'Its much better to do it in a way that nobody knows about it.'),
    new Quote(4,`Movies have takes.But plays are like life you don't really get takes.`),
    new Quote(5,'The end of a man is action, and not thought, though it be of the noblest.'),
    new Quote(6,'The more we do the more we can do;the more busy we are, the more leisure we have.'),
    new Quote(7,'The more you learn the more you earn.'),
  ]
 }
