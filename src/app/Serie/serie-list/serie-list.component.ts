import { Component, OnInit } from '@angular/core';
import { SerieService } from '../serie.service';
import { Serie } from '../serie';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  constructor(private serieService: SerieService) { }

  series: Array<Serie> = [];

  getSeries(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
    });
  }

  getAverageSeasons(): number {
    let totalSeasons = 0;
    for (let serie of this.series) {
      totalSeasons += serie.seasons;
    }
    return totalSeasons / this.series.length;
  }

  ngOnInit() {
    this.getSeries();

  }
}
