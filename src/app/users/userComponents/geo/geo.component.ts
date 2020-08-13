import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-geo',
  templateUrl: './geo.component.html',
  styleUrls: ['./geo.component.css'],
})
export class GeoComponent implements OnInit {
  @Input() geo;
  constructor() {}

  ngOnInit(): void {}
}
