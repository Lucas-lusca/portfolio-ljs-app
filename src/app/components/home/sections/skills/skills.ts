import { Component } from '@angular/core';
import { SectionLayout } from "../../../../shared/section-layout/section-layout";
import { SkillLayout } from '../../../../shared/skill-layout/skill-layout';

@Component({
  selector: 'app-skills',
  imports: [SectionLayout, SkillLayout],
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
      name: 'Git/Github',
      description: 'Controle de versão e deploy de aplicações'
    }
  ];

}
