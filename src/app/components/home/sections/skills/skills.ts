import { Component } from '@angular/core';
import { SectionLayout } from "../../../../shared/section-layout/section-layout";
import { Skill } from "../../../../shared/skill/skill";

@Component({
  selector: 'app-skills',
  imports: [SectionLayout, Skill],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {

  skills: { name: string, description: string }[] = [
    {
      name: 'Angular',
      description: 'Framework para aplicações web escaláveis'
    },
    {
      name: 'Node.js',
      description: 'JavaScript escalável'
    },
    {
      name: 'PHP',
      description: 'Desenvolvimento backend e APIs'
    },
    {
      name: 'SQL',
      description: 'Consultas em banco de dados'
    },
    {
      name: 'Docker',
      description: 'Containerização e padronização de ambientes'
    },
    {
      name: 'Git',
      description: 'Controle de versão e colaboração'
    }
  ];

}
