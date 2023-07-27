import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserApiModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss'],
})
export class EditDialogComponent {
  private _editUserForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserApiModel,
    private fb: FormBuilder,
  ) {
    this._editUserForm = this.fb.group({
      name: [data.name, [Validators.required, Validators.maxLength(100)]],
      email: [data.email, [Validators.required, Validators.email]],
      website: [data.website, [Validators.required]],
    });
  }

  get editUserForm() {
    return this._editUserForm;
  }

  onSubmit() {
    if (!this.editUserForm.valid) return;
    this.dialogRef.close({ id: this.data.id, ...this._editUserForm.value });
  }
}
