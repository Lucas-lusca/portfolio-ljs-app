import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-layout',
  imports: [],
  templateUrl: './project-layout.html',
  styleUrl: './project-layout.css',
})
export class ProjectLayout {

  @Input() title: string = '';
  @Input() description: string = '';
  @Input() techs: { name: string; }[] = [
    {
      name: ''
    }
  ];
  @Input() link: string = '';

}
