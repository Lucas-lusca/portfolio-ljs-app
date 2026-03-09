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
  cards: {icon:string, title:string, description:string}[] = [
    {
      icon: 'fa-solid fa-code',
      title: 'Código Limpo',
      description: 'Escrevo código legível, manutenível e seguindo as melhores práticas da indústria.'
    },
    {
      icon: 'fa-solid fa-rocket',
      title: 'Inovação',
      description: 'Sempre atualizado com as últimas tendências e tecnologias do desenvolvimento web.'
    },
    {
      icon: 'fa-solid fa-users',
      title: 'Trabalho em Equipe',
      description: 'Colaboro efetivamente com designers, gerentes de projeto e outros desenvolvedores.'
    },
  ]
}
