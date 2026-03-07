import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-layout',
  imports: [CommonModule],
  templateUrl: './section-layout.html',
  styleUrl: './section-layout.css',
})
export class SectionLayout {

  @Input() title: string = '';
  @Input() sectionId: string = '';
  @Input() background: string = '';

}
