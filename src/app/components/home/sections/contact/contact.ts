import { Component } from '@angular/core';
import { SectionLayout } from "../../../shared/section-layout/section-layout";
import { FormLayout } from "../../../shared/form-layout/form-layout";

@Component({
  selector: 'app-contact',
  imports: [SectionLayout, FormLayout],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {}
