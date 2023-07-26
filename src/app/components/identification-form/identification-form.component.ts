import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-identification-form',
  templateUrl: './identification-form.component.html',
  styleUrls: ['./identification-form.component.scss'],
})
export class IdentificationFormComponent {
  identificationForm = this.fb.group({
    userInfo: this.fb.group({
      name: [''],
      lastname: [''],
      secondLastname: [''],
      curp: [''],
      rfc: [''],
    }),
    address: this.fb.group({
      zip: [''],
      street: [''],
      extNum: [''],
      intNum: [''],
      state: [''],
      district: [''],
      colony: [''],
    }),
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.warn(this.identificationForm.value);
  }
}
