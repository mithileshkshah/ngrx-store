import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-custom-footer',
  imports: [],
  templateUrl: './custom-footer.component.html',
  styleUrl: './custom-footer.component.scss',
})
export class CustomFooterComponent {
  currentYear = signal(new Date().getFullYear());
}
