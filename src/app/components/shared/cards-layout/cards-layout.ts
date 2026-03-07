import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-layout',
  imports: [],
  templateUrl: './cards-layout.html',
  styleUrl: './cards-layout.css',
})
export class CardsLayout {

  @Input() title: string = '';
  @Input() description: string = '';

}
