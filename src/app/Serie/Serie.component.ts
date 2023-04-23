import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';

@Component({
  selector: 'app-Serie',
  templateUrl: './Serie.component.html',
  styleUrls: ['./Serie.component.css']
})
export class SerieComponent implements OnInit {
  private series: Array<Serie> = [];

  constructor() { }

  ngOnInit() {
  }

}
