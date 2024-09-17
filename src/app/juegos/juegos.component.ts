import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-juegos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {
  juegos: any[] = [];
  filteredJuegos: any[] = [];
  minPrice: number = 0;
  maxPrice: number = 1000;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.apiService.getJuegos().subscribe(juegos => {
      this.juegos = juegos;
      this.filteredJuegos = juegos;
    });
  }

  filterByPrice() {
    this.filteredJuegos = this.juegos.filter(juego =>
      juego.price >= this.minPrice && juego.price <= this.maxPrice
    );
  }

  viewDetails(id: string) {
    this.router.navigate([`/juego/${id}`]);
  }
}
