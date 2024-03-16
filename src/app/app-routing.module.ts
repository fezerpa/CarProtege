import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioComponent } from './calendario/calendario.component';
import { CochesComponent } from './coches/coches.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { FacturasComponent } from './facturas/facturas.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RevisionesComponent } from './revisiones/revisiones.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
// import { CabeceraComponent } from './cabecera/cabecera.component';


const routes: Routes = [
  {
    path:'', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path:"calendario", component: CalendarioComponent
  },
  {
    path:"coches", component: CochesComponent
  },
  {
    path:"colaboradores", component: ColaboradoresComponent
  },
  {
    path:"facturas", component: FacturasComponent
  },
  {
    path:"home", component: HomeComponent
  },
  {
    path:"login", component: LoginComponent
  },
  {
    path:"revisiones", component: RevisionesComponent
  },
  {
    path:"usuarios", component: UsuariosComponent
  }
  // {
  //   path:"cabecera", component: CabeceraComponent
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
