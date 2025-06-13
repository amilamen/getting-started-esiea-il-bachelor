import { Component } from '@angular/core';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { addIcons } from "ionicons";
import { eyeOffOutline, eyeOutline } from "ionicons/icons";
import { Router, RouterModule } from "@angular/router";
import { StorageService } from "../../core/services/storage/storage.service";
import { StorageKeyEnum } from "../../core/enums/storage-key.enum";

export type Registration = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    FormsModule,
    IonIcon,
    ReactiveFormsModule,
    RouterModule,
  ],
})
export class HomePage {
  protected registerForm = new FormGroup({
    lastName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    firstName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });

  protected typeOfPasswordInput = 'password';
  protected iconOfPasswordInput = 'eye-outline';

  constructor(private router: Router, private storageService: StorageService) {
    addIcons({eyeOutline, eyeOffOutline});
  }

  public onTogglePasswordVisibility() {
    if (this.typeOfPasswordInput === 'password') {
      this.iconOfPasswordInput = 'eye-off-outline';
      this.typeOfPasswordInput = 'text';
    } else {
      this.iconOfPasswordInput = 'eye-outline';
      this.typeOfPasswordInput = 'password';
    }
  }

  public onRegister(): void {
    const registrationValue: Registration = this.registerForm.value as Registration;
    this.router.navigate(['/calculator']).then(() => {
      this.storageService.setItem<Registration>(StorageKeyEnum.USER, registrationValue);
    })
  }
}
