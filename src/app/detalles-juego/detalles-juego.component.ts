import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalles-juego',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalles-juego.component.html',
  styleUrls: ['./detalles-juego.component.css']
})
export class DetallesJuegoComponent implements OnInit {
  juego: any;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.apiService.getJuego(id).subscribe(juego => {
        this.juego = juego;
      });
    }
  }
}
