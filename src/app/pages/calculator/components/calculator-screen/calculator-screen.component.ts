import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-screen',
  templateUrl: './calculator-screen.component.html',
  styleUrls: ['./calculator-screen.component.scss'],
})
export class CalculatorScreenComponent  implements OnInit {

  readonly screenResult = input.required<string>();

  constructor() { }

  ngOnInit() {}

}
