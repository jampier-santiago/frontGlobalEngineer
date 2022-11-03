// --- Dependencies ---
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// --- Services ---
import { MessageService } from 'primeng/api';
import { ProductosService } from '../productos.service';

// --- Interfaces ---
import { Product } from '../products.interfaces';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit {
  public products: Product[] = [];
  public id: string = '';

  onChangeInput(value: string) {
    if (value) {
      this.id = value;
    } else {
      const subsCatalogs = this._productService
        .getAllProducts()
        .subscribe(() => {
          subsCatalogs.unsubscribe();
        });
    }
  }

  searchContact() {
    this._productService.getProductsById(this.id).subscribe(
      () => {},
      (error) => {
        if (error.status === 404 || error.status === '404') {
          this.id = '';
          this._messageService.add({
            key: 'toastError',
            severity: 'error',
            summary: 'Error en la busqueda',
            detail: 'No se encontro ningun elemento relacionado a su busqueda',
          });
          const subsCatalogs = this._productService
            .getAllProducts()
            .subscribe(() => {
              subsCatalogs.unsubscribe();
            });
        }
      }
    );
  }

  goToAdd() {
    this._router.navigateByUrl('productos/add');
  }

  goToEdit(id: string) {
    this._router.navigateByUrl(`productos/editar/${id}`);
  }

  constructor(
    private _router: Router,
    private _productService: ProductosService,
    private _messageService: MessageService
  ) {}

  ngOnInit(): void {
    this._productService.getAllProducts().subscribe();
    this._productService.product$.subscribe((data) => (this.products = data));
  }
}
