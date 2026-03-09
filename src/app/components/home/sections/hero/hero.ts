import { Component } from '@angular/core';
import { SectionLayout } from '../../../../shared/section-layout/section-layout';

@Component({
  selector: 'app-hero',
  imports: [SectionLayout],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

  name: string = "Lucas Justi Scariot";
  description: string = "Desenvolvedor Full Stack";
  github: string = "https://github.com/Lucas-lusca";
  linkedin: string = "https://www.linkedin.com/in/lucas-justi-scariot-428938223/";

}
