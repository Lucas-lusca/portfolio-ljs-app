import { Component } from '@angular/core';
import { SectionLayout } from "../../../shared/section-layout/section-layout";
import { ProjectLayout } from "../../../shared/project-layout/project-layout";

@Component({
  selector: 'app-projects',
  imports: [SectionLayout, ProjectLayout],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects: {title:string, description:string, techs: {name: string}[], link:string}[] = [
    {
        title: 'Portfolio',
        description: 'Desenvolvido com Angular 21',
        techs: [
          {
            name: 'Angular',
          }
        ],
        link: '',
    },
  ];
}
