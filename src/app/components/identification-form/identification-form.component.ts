import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-identification-form',
  templateUrl: './identification-form.component.html',
  styleUrls: ['./identification-form.component.scss'],
})
export class IdentificationFormComponent {
  private _identificationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
  ) {
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

  get name(): FormControl {
    return this._identificationForm.get('userInfo')?.get('name') as FormControl;
  }

  get lastname(): FormControl {
    return this._identificationForm
      .get('userInfo')
      ?.get('lastname') as FormControl;
  }

  get curp(): FormControl {
    return this._identificationForm.get('userInfo')?.get('curp') as FormControl;
  }

  get rfc(): FormControl {
    return this._identificationForm.get('userInfo')?.get('rfc') as FormControl;
  }

  get zip(): FormControl {
    return this._identificationForm.get('address')?.get('zip') as FormControl;
  }

  get street(): FormControl {
    return this._identificationForm
      .get('address')
      ?.get('street') as FormControl;
  }

  get extNum(): FormControl {
    return this._identificationForm
      .get('address')
      ?.get('extNum') as FormControl;
  }

  get intNum(): FormControl {
    return this._identificationForm
      .get('address')
      ?.get('intNum') as FormControl;
  }

  get state(): FormControl {
    return this._identificationForm.get('address')?.get('state') as FormControl;
  }

  get district(): FormControl {
    return this._identificationForm
      .get('address')
      ?.get('district') as FormControl;
  }

  get colony(): FormControl {
    return this._identificationForm
      .get('address')
      ?.get('colony') as FormControl;
  }

  onSubmit() {
    if (this._identificationForm.invalid) return;

    Swal.fire({
      title: 'Campos validados correctamente',
      text: 'Desea enviar los datos al siguiente servicio?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      showLoaderOnConfirm: true,
      preConfirm: () => {
        return this.userService.save(this._identificationForm.value);
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Datos enviados correctamente', '', 'success');
        this._identificationForm.reset();
      }
    });
  }
}
