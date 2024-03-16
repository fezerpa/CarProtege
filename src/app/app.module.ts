import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { CochesComponent } from './coches/coches.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { FacturasComponent } from './facturas/facturas.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RevisionesComponent } from './revisiones/revisiones.component';
import { SidebarComponent } from './compartidos/sidebar/sidebar.component';  
import { UsuariosComponent } from './usuarios/usuarios.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CabeceraComponent } from './cabecera/cabecera.component';

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
  },
  {
    path:"cabecera", component: CabeceraComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent, 
    CochesComponent,
    FacturasComponent,
    UsuariosComponent,
    CalendarioComponent,
    ColaboradoresComponent,
    RevisionesComponent,
    LoginComponent,
    CabeceraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
