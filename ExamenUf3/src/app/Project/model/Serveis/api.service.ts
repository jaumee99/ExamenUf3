import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private apiUrlBase = 'https://api.artic.edu/api/v1/artworks';

  getArtworks() {
    return this.http.get(this.apiUrlBase);
  }

}
