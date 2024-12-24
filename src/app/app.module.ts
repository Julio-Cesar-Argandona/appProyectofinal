import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Importar ReactiveFormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroProductosComponent } from './pages/registro-productos/registro-productos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductosRegistradosComponent } from './pages/productos-registrados/productos-registrados.component';
import { InicioComponent } from './pages/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroProductosComponent,
    NavbarComponent,
    ProductosRegistradosComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule // Asegúrate de agregarlo aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
