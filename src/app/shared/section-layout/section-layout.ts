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
  @Input() sectionClass: string = 'whiteSection';
  @Input() contentClass: string = 'whiteContent';

  copySectionUrl(event: MouseEvent) {
    event.preventDefault();

    const link = (event.currentTarget as HTMLAnchorElement).href;

    navigator.clipboard.writeText(link);

    alert("Link copiado!");
  }

}
