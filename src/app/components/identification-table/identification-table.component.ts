import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { EditDialogComponent } from './edit-dialog/edit-dialog.component';

import { UserService } from './../../services/user.service';

import { UserApiModel } from './../../models/user.model';

@Component({
  selector: 'app-identification-table',
  templateUrl: './identification-table.component.html',
  styleUrls: ['./identification-table.component.scss'],
})
export class IdentificationTableComponent implements OnInit {
  private _userList: UserApiModel[];

  constructor(
    private userService: UserService,
    public dialog: MatDialog,
  ) {
    this._userList = [];
  }

  get userList(): UserApiModel[] {
    return this._userList;
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((userList) => {
      this._userList = userList;
    });
  }

  onEdit(id: number) {
    const user = this._userList.find((user) => user.id === id);
    const editDialogRef = this.dialog.open(EditDialogComponent, {
      data: user,
    });

    editDialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const userIndex = this._userList.findIndex(
          (user) => user.id === result.id,
        );
        this._userList[userIndex].name = result.name;
        this._userList[userIndex].email = result.email;
        this._userList[userIndex].website = result.website;
      }
    });
  }

  onDelete(id: number) {
    const userIndex = this._userList.findIndex((user) => user.id === id);
    this._userList.splice(userIndex, 1);
  }
}
