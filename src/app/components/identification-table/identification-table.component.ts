import { Component, OnInit } from '@angular/core';

import { UserService } from './../../services/user.service';

import { UserApiModel } from './../../models/user.model';

@Component({
  selector: 'app-identification-table',
  templateUrl: './identification-table.component.html',
  styleUrls: ['./identification-table.component.scss'],
})
export class IdentificationTableComponent implements OnInit {
  private _userList: UserApiModel[];

  constructor(private userService: UserService) {
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
}
