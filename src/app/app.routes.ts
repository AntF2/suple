import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { JuegosComponent } from './juegos/juegos.component';
import { GestionComponent } from './gestion/gestion.component';
import { PersonalComponent } from './personal/personal.component';
import { DetallesJuegoComponent } from './detalles-juego/detalles-juego.component';
import { Error403Component } from './error403/error403.component';
import { AuthGuard } from './auth.guard'; // Importa AuthGuard aquí

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'juegos', component: JuegosComponent, canActivate: [AuthGuard] },
  { path: 'gestion', component: GestionComponent, canActivate: [AuthGuard] },
  { path: 'personal', component: PersonalComponent, canActivate: [AuthGuard] },
  { path: 'juego/:id', component: DetallesJuegoComponent, canActivate: [AuthGuard] },
  { path: '403', component: Error403Component },
  { path: '**', redirectTo: 'login' }
];
