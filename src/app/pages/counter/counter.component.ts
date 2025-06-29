import { Component, OnInit } from '@angular/core';
import { CustomHeaderComponent } from '../../components/custom-header/custom-header.component';
import { CustomFooterComponent } from '../../components/custom-footer/custom-footer.component';

@Component({
  selector: 'app-counter',
  imports: [CustomHeaderComponent, CustomFooterComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent implements OnInit {
  count = 0;

  ngOnInit(): void {}
}
