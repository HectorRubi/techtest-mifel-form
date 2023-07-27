import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  UserApiModel,
  UserFormModel,
  UserSaveModel,
  UserSaveResponseModel,
} from './../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _getUrl = 'https://jsonplaceholder.typicode.com/users';
  private _saveUrl = 'http://httpbin.org/post';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserApiModel[]> {
    return this.http.get<UserApiModel[]>(this._getUrl);
  }

  save(data: UserFormModel): Observable<UserSaveResponseModel> {
    const body = this._userDataMapper(data);
    return this.http.post<UserSaveResponseModel>(this._saveUrl, body);
  }

  private _userDataMapper(data: UserFormModel): UserSaveModel {
    const { userInfo, address } = data;
    return {
      infoUsuario: {
        nombre: userInfo.name,
        primerApellido: userInfo.lastname,
        segundoApellido: userInfo.secondLastname,
        curp: userInfo.curp,
        rfc: userInfo.rfc,
      },
      domicilio: {
        codigoPostal: address.zip,
        calle: address.street,
        numeroExterior: address.extNum,
        numeroInterior: address.intNum,
        estado: address.state,
        delegacion: address.district,
        colonia: address.colony,
      },
    };
  }
}
