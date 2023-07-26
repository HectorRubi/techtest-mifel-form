import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-identification-form',
  templateUrl: './identification-form.component.html',
  styleUrls: ['./identification-form.component.scss'],
})
export class IdentificationFormComponent {
  private _identificationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    const onlyLettersRegexp = /^[a-zA-Z]+$/;
    const alphanumericRegexp = /^[0-9a-zA-Z]+$/;
    const curpRegexp = /^[A-Z][AEIOUX][A-Z]{2}[0-9]{6}[HM][A-Z]{5}[A-Z0-9]{2}$/;
    const rfcRegexp = /^[A-Z][AEIOUX][A-Z]{2}[0-9]{6}[A-Z0-9]{3}$/;

    this._identificationForm = this.fb.group({
      userInfo: this.fb.group({
        name: [
          '',
          [Validators.required, Validators.pattern(onlyLettersRegexp)],
        ],
        lastname: [
          '',
          [Validators.required, Validators.pattern(onlyLettersRegexp)],
        ],
        secondLastname: ['', [Validators.pattern(onlyLettersRegexp)]],
        curp: [
          '',
          [
            Validators.required,
            Validators.minLength(18),
            Validators.maxLength(18),
            Validators.pattern(curpRegexp),
          ],
        ],
        rfc: ['', [Validators.required, Validators.pattern(rfcRegexp)]],
      }),
      address: this.fb.group({
        zip: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(5),
          ],
        ],
        street: ['', [Validators.required]],
        extNum: ['', [Validators.required, Validators.maxLength(5)]],
        intNum: [
          '',
          [Validators.maxLength(10), Validators.pattern(alphanumericRegexp)],
        ],
        state: [
          '',
          [Validators.required, Validators.pattern(onlyLettersRegexp)],
        ],
        district: [
          '',
          [Validators.required, Validators.pattern(onlyLettersRegexp)],
        ],
        colony: [
          '',
          [Validators.required, Validators.pattern(onlyLettersRegexp)],
        ],
      }),
    });
  }

  get identificationForm(): FormGroup {
    return this._identificationForm;
  }

  onSubmit() {
    console.warn(this.identificationForm.value);
  }
}
