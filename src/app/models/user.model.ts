export interface UserApiModel {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface UserSaveModel {
  infoUsuario: {
    nombre: string;
    primerApellido: string;
    segundoApellido: string;
    curp: string;
    rfc: string;
  };
  domicilio: {
    codigoPostal: string;
    calle: string;
    numeroExterior: string;
    numeroInterior: string;
    estado: string;
    delegacion: string;
    colonia: string;
  };
}

export interface UserSaveResponseModel {
  args: object;
  data: string;
  files: object;
  form: object;
  headers: {
    Accept: string;
    'Accept-Encoding': string;
    'Accept-Language': string;
    'Content-Length': string;
    'Content-Type': string;
    Host: string;
    Origin: string;
    Referer: string;
    'User-Agent': string;
    'X-Amzn-Trace-Id': string;
  };
  json: UserSaveModel;
  origin: string;
  url: string;
}

export interface UserFormModel {
  userInfo: {
    name: string;
    lastname: string;
    secondLastname: string;
    curp: string;
    rfc: string;
  };
  address: {
    zip: string;
    street: string;
    extNum: string;
    intNum: string;
    state: string;
    district: string;
    colony: string;
  };
}
