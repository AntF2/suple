import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestion',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {
  juegos: any[] = [];
  selectedJuego: any = null;
  newJuego: any = { title: '', image: '', price: '', description: '', platform: '' };

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadJuegos();
  }

  loadJuegos() {
    this.apiService.getJuegos().subscribe(juegos => {
      this.juegos = juegos;
    });
  }

  selectJuego(juego: any) {
    this.selectedJuego = { ...juego };
  }

  createJuego() {
    this.apiService.createJuego(this.newJuego).subscribe(() => {
      this.loadJuegos();
      this.newJuego = { title: '', image: '', price: '', description: '', platform: '' };
    });
  }

  updateJuego() {
    if (this.selectedJuego) {
      this.apiService.updateJuego(this.selectedJuego).subscribe(() => {
        this.loadJuegos();
        this.selectedJuego = null;
      });
    }
  }

  deleteJuego(id: string) {
    this.apiService.deleteJuego(id).subscribe(() => {
      this.loadJuegos();
    });
  }
}
