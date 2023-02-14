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
  formData = new Mida('');

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadArtworks();
  }

  public loadArtworks() {
    return this.apiService.getArtworks().subscribe((data: any) => {
      this.artworks = data.data;
    });
  }

  midaImatge(mida: any) {

  }

  visualitzar(id: any) {

  }
}
