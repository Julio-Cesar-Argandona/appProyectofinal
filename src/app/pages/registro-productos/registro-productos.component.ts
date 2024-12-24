import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-registro-productos',
  standalone: false,
  
  templateUrl: './registro-productos.component.html',
  styleUrl: './registro-productos.component.css'
})
export class RegistroProductosComponent {
  productoForm: FormGroup;
  productos: any[] = []; // Lista para almacenar los productos registrados
  mensajeConfirmacion: string = ''; // Mensaje de confirmación

  constructor(private fb: FormBuilder) {
    this.productoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]],
      fecha: ['', Validators.required],  // Nuevo campo para la fecha
      cantidadStock: ['', [Validators.required, Validators.min(1)]],  // Nuevo campo para cantidad en stock
      categoria: ['', Validators.required]  // Nuevo campo para categoría
    });
  }

  registrarProducto(): void {
    if (this.productoForm.valid) {
      const nuevoProducto = this.productoForm.value;
  
      // Obtener los productos ya guardados en localStorage
      const productosGuardados = localStorage.getItem('productos');
      let productos = productosGuardados ? JSON.parse(productosGuardados) : [];
  
      // Agregar el nuevo producto al arreglo de productos
      productos.push(nuevoProducto);
  
      // Guardar nuevamente el arreglo completo de productos en localStorage
      localStorage.setItem('productos', JSON.stringify(productos));
  
      // Mostrar mensaje de confirmación
      this.mensajeConfirmacion = 'Producto registrado exitosamente';
  
      // Resetea el formulario
      this.productoForm.reset();
  
      // Ocultar el mensaje después de 3 segundos
      setTimeout(() => {
        this.mensajeConfirmacion = '';
      }, 3000);
  
    } else {
      alert('Por favor, completa todos los campos obligatorios.');
    }
  }  
}
