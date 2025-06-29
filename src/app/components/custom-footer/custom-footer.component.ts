import { Component, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../state/app.state';
import { selectCount } from '../../state/counter/counter.selector';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-custom-footer',
  imports: [AsyncPipe],
  templateUrl: './custom-footer.component.html',
  styleUrl: './custom-footer.component.scss',
})
export class CustomFooterComponent {
  currentYear = signal(new Date().getFullYear());

  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = this.store.select(selectCount);
  }
}
