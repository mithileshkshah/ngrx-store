import { Component, inject, OnInit } from '@angular/core';
import { CustomHeaderComponent } from '../../components/custom-header/custom-header.component';
import { CustomFooterComponent } from '../../components/custom-footer/custom-footer.component';
import { Observable, take } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { selectCount } from '../../state/counter/counter.selector';
import { AsyncPipe } from '@angular/common';
import {
  decrement,
  increment,
  reset,
} from '../../state/counter/counter.actions';

@Component({
  selector: 'app-counter',
  imports: [CustomHeaderComponent, CustomFooterComponent, AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = this.store.select(selectCount);
  }

  handleIncrement() {
    this.store.dispatch(increment());
  }

  handleDecrement() {
    this.store.dispatch(decrement());
    // this.count$.pipe(take(1)).subscribe((count) => {
    //   if (count > 0) {
    //     this.store.dispatch(decrement());
    //   }
    // });
  }

  handleReset() {
    this.store.dispatch(reset());
  }
}
