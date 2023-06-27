import { Component } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-external',
  templateUrl: './external.component.html',
  styleUrls: ['./external.component.css']
})
export class ExternalComponent {
  constructor(private location: Location) { }

  goBack(): void {
    this.location.back();
  }
}
