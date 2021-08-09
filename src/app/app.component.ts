import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('clickGreen', [
      state('true', style({
        backgroundColor: 'green'
      })),
      state('false', style({
        backgroundColor: 'red'
      })),
      transition('true => false', animate('2000ms linear')),
      transition('false => true', animate('2000ms linear'))
    ])
  ]
})
export class AppComponent {
  title = 'animation';
  isGreen: boolean = true;

  toggleIsCorrect() {
    this.isGreen = this.isGreen ? false : true;
  }
}
