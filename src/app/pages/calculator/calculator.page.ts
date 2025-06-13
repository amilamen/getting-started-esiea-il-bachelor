import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { CalculatorScreenComponent } from "./components/calculator-screen/calculator-screen.component";
import { RouterModule } from "@angular/router";
import { StorageService } from "../../core/services/storage/storage.service";
import { StorageKeyEnum } from "../../core/enums/storage-key.enum";
import { Registration } from "../home/home.page";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButton,
    CalculatorScreenComponent,
    RouterModule,
  ]
})
export class CalculatorPage {

  protected screenResult = '';
  protected operator = '';
  protected firstName = '';

  private numberOne = 0;
  private numberTwo = 0;

  constructor(private storageService: StorageService) {
    this.firstName = this.storageService.getItem<Registration>(StorageKeyEnum.USER).firstName;
  }

  public onChooseValue(value: number): void {
    console.log(value);
    this.screenResult = this.screenResult + value;
  }

  public onChooseOperator(operator: string): void {
    this.operator = operator;
    this.numberOne = +this.screenResult;
    this.screenResult = '';
  }

  public onCalculResult(): void {
    this.numberTwo = +this.screenResult;
    this.screenResult = eval(this.numberOne + this.operator + this.numberTwo);
  }
}
