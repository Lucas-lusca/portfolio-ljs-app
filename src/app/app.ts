import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterLayout } from "./shared/footer-layout/footer-layout";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterLayout],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio-ljs-app');
}
