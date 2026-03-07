import { Component } from '@angular/core';
import { SectionLayout } from "../../../shared/section-layout/section-layout";

@Component({
  selector: 'app-skills',
  imports: [SectionLayout],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {

  skills: {name: string, description: string}[] = [
    {
      name: 'Angular',
      description: 'Framework moderno para aplicações web escaláveis'
    },
    {
      name: 'React',
      description: 'Biblioteca para construção de interfaces'
    },
    {
      name: 'Node.js',
      description: 'Backend JavaScript escalável'
    },
    {
      name: 'PHP',
      description: 'Desenvolvimento backend e APIs'
    },
    {
      name: 'SQL',
      description: 'Modelagem e otimização de bancos de dados'
    },
    {
      name: 'Docker',
      description: 'Containerização de aplicações'
    }
  ];

}
