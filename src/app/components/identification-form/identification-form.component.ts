import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-identification-form',
  templateUrl: './identification-form.component.html',
  styleUrls: ['./identification-form.component.scss'],
})
export class IdentificationFormComponent {
  identificationForm = new FormGroup({
    userInfo: new FormGroup({
      name: new FormControl(''),
      lastname: new FormControl(''),
      secondLastname: new FormControl(''),
      curp: new FormControl(''),
      rfc: new FormControl(''),
    }),
    address: new FormGroup({
      zip: new FormControl(''),
      street: new FormControl(''),
      extNum: new FormControl(''),
      intNum: new FormControl(''),
      state: new FormControl(''),
      district: new FormControl(''),
      colony: new FormControl(''),
    }),
  });

  onSubmit() {
    console.warn(this.identificationForm.value);
  }
}
