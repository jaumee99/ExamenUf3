import { Component, OnInit } from '@angular/core';
import { Mida } from '../../model/entitats/implementation/Mida/Mida';
import { ApiService } from '../../model/Serveis/api.service';

@Component({
  selector: 'app-llistat-paginat',
  templateUrl: './llistat-paginat.component.html',
  styleUrls: ['./llistat-paginat.component.css']
})
export class LlistatPaginatComponent implements OnInit {
  artworks!: Array<any>;
  formData = new Mida('');

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadArtworks();
  }

  midaImatge(mida: any) {

  }

  public loadArtworks() {
    this.apiService.getArtworks().subscribe(data => {
    });
  }

}
