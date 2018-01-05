import { Component, OnInit } from '@angular/core';
import { Quotes} from 'quotes';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1, 'It may have been in pieces, but I gave you the best of me.'),
    new Quote(2, 'Everything should be made as simple as possible, but not simpler'),
  ]

  constructor() { }

  ngOnInit() {
  }

}
