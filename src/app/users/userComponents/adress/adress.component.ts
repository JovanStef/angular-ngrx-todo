import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-adress',
  templateUrl: './adress.component.html',
  styleUrls: ['./adress.component.css'],
})
export class AdressComponent implements OnInit {
  @Input() address;
  constructor() {}

  ngOnInit(): void {}
}
