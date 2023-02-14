import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Mida } from '../../model/entitats/implementation/Mida/Mida';
import { ApiService } from '../../model/Serveis/api.service';

@Component({
  selector: 'app-llistat-paginat',
  templateUrl: './llistat-paginat.component.html',
  styleUrls: ['./llistat-paginat.component.css']
})
export class LlistatPaginatComponent implements OnInit {
  public artworks: any;
  public selectedArtwork: any;
  formData = new Mida('');

  constructor(private apiService: ApiService, private http: HttpClient) { }

  ngOnInit(): void {
    this.loadArtworks();
  }

  public loadArtworks() {
    return this.apiService.getArtworks().subscribe((data: any) => {
      this.artworks = data.data;
    });
  }

  paginations() {
    
  }

  detail (imageId: number) {
    this.http.get(`https://api.artic.edu/api/v1/artworks/${imageId}`).subscribe((data: any) => {
      this.selectedArtwork = data.data;
    });
  }

  midaImatge(mida: any) {

  }

  visualitzar(artworkId: number) {
    this.http.get(`https://api.artic.edu/api/v1/artworks/${artworkId}`).subscribe((data: any) => {
      this.selectedArtwork = data.data;
    });
  }
}
