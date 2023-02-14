import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private apiUrlBase = 'https://api.artic.edu/api/v1/artworks';

  getArtworks(): Observable<any> {
    return this.http.get(this.apiUrlBase);
  }

  getImage() {
  //  return this.http.get(this.apiUrlBase + );
  }

}
