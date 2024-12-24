import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RegistroProductosComponent } from './pages/registro-productos/registro-productos.component';
import { ProductosRegistradosComponent } from './pages/productos-registrados/productos-registrados.component';


const routes: Routes = [
  { path: '', component: InicioComponent }, // Página principal
  { path: 'registro-productos', component: RegistroProductosComponent },
  { path: 'productos-registrados', component: ProductosRegistradosComponent },
  { path: '**', redirectTo: '' }, // Redirige al formulario por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

