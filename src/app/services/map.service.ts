import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  constructor(private http: HttpClient) {}

  getMap(lat: string, lng: string): Observable<Blob> {
    const url = 'https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/';
    const access_token =
      'pk.eyJ1IjoiaGVjdG9yLXJ1YmkiLCJhIjoiY2xrbGs5bXI1MDVreDNkbnh3ZDcweWQzZCJ9._LqC3GJ2tMW9LNfTpIruwA';
    return this.http.get(
      `${url}${lat},${lng},9,0/300x200?access_token=${access_token}`,
      {
        responseType: 'blob',
      },
    );
  }
}
