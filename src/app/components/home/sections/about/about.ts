import { Component } from '@angular/core';
import { SectionLayout } from "../../../shared/section-layout/section-layout";
import { CardsLayout } from "../../../shared/cards-layout/cards-layout";

@Component({
  selector: 'app-about',
  imports: [SectionLayout, CardsLayout],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  cards: {title:string, description:string}[] = [
    {
      title: 'Teste',
      description: 'Descriao muito boa aqui'
    }
  ]
}
