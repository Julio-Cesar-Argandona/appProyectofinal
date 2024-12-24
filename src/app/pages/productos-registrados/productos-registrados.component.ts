import { Component } from '@angular/core';

@Component({
  selector: 'app-productos-registrados',
  standalone: false,
  
  templateUrl: './productos-registrados.component.html',
  styleUrl: './productos-registrados.component.css'
})
export class ProductosRegistradosComponent {
  productos: any[] = [];

  ngOnInit(): void {
        // Cargar los productos desde el almacenamiento local (localStorage)
        const productosGuardados = localStorage.getItem('productos');
        if (productosGuardados) {
          this.productos = JSON.parse(productosGuardados);
    }
  }
}
