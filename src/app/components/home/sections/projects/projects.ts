import { Component } from '@angular/core';
import { SectionLayout } from "../../../../shared/section-layout/section-layout";
import { ProjectLayout } from "../../../../shared/project-layout/project-layout";

@Component({
  selector: 'app-projects',
  imports: [SectionLayout, ProjectLayout],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects: { title: string, description: string, techs: { name: string }[], link: string }[] = [
    {
      title: 'Portfólio',
      description: 'Portfólio pessoal desenvolvido com Angular para apresentar projetos, habilidades e experiência.',
      techs: [
        { name: 'Angular' },
        { name: 'Git/Github' },
        { name: 'Docker' }
      ],
      link: 'https://github.com/Lucas-lusca/portfolio-ljs-app',
    },
    {
      title: 'Node.js REST API',
      description: 'API REST desenvolvida em Node.js e Express para estudo de rotas, operações CRUD e integração com MySQL.',
      techs: [
        { name: 'Node.js' },
        { name: 'Express' },
        { name: 'MySQL' },
      ],
      link: 'https://github.com/Lucas-lusca/api-nodejs/tree/main',
    },
    {
      title: 'Machine Learning Algorithm',
      description: 'Experimento em PHP inspirado em Machine Learning para descobrir automaticamente a melhor combinação de valores para atingir um resultado.',
      techs: [
        { name: 'PHP' },
        { name: 'Algorithm' },
        { name: 'Machine Learning' }
      ],
      link: 'https://github.com/Lucas-lusca/PHP-AI-Algorithm-for-fun',
    },
    {
      title: 'Discord Bot',
      description: 'Bot para Discord em Python com comandos para buscar informações de artistas e letras de músicas utilizando APIs externas.',
      techs: [
        { name: 'Python' },
        { name: 'Discord.py' },
        { name: 'Spotipy' },
        { name: 'LyricsGenius' }
      ],
      link: 'https://github.com/Lucas-lusca/DiscordBot',
    }
  ];
}
