import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-layout',
  imports: [],
  templateUrl: './skill-layout.html',
  styleUrl: './skill-layout.css',
})
export class SkillLayout {

  @Input() name: string = '';
  @Input() description: string = '';

}
