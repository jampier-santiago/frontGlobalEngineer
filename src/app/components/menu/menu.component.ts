// --- Dependencies ---
import { Component, OnInit } from '@angular/core';

// --- Interfaces ---
import { MenuItem } from 'primeng/api';
import { Group } from './menu.interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public items: MenuItem[] = [];
  private _groups: Group[] = [];

  constructor() {
    this._groups = [
      { label: 'Catalogos', icon: 'pi pi-fw pi-book', baseUrl: 'catalogos' },
      { label: 'Contactos', icon: 'pi pi-fw pi-phone', baseUrl: 'contactos' },
      { label: 'Personas', icon: 'pi pi-fw pi-users', baseUrl: 'personas' },
      {
        label: 'Producciones',
        icon: 'pi pi-fw pi-truck',
        baseUrl: 'producciones',
      },
      {
        label: 'Productos',
        icon: 'pi pi-fw pi-gift',
        baseUrl: 'productos',
      },
      {
        label: 'Ingredientes',
        icon: 'pi pi-fw pi-box',
        baseUrl: 'ingredientes',
      },
      {
        label: 'Ingredientes por producto',
        icon: 'pi pi-fw pi-sitemap',
        baseUrl: 'ingredientes-x-productos',
      },
    ];
  }

  ngOnInit(): void {
    const temporaryItems: MenuItem[] = [];

    this._groups.forEach((group) => {
      temporaryItems.push({
        label: group.label,
        icon: group.icon,
        items: [
          {
            label: 'Agregar',
            icon: 'pi pi-fw pi-plus',
            routerLink: `/${group.baseUrl}/agregar`,
          },
          {
            label: 'Editar',
            icon: 'pi pi-fw pi-pencil',
            routerLink: `/${group.baseUrl}/editar`,
          },
          {
            label: 'Listar',
            icon: 'pi pi-fw pi-list',
            routerLink: `/${group.baseUrl}/listar`,
          },
        ],
      });
    });

    this.items = [
      ...temporaryItems,
      {
        label: 'Informes',
        icon: 'pi pi-fw pi-file-o',
        routerLink: '/informes',
      },
    ];
  }
}
