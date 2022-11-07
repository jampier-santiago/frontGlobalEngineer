export interface BaseProduction {
  Id_Produccion?: string;
  num_totalProduccion: string;
  num_Defectuosos_Produccion: string;
}

export interface ProductionList extends BaseProduction {
  Nombre_encargado: string;
  Apellido_encargado: string;
  Nombre_Producto: string;
  Fecha: Date | string;
}

export interface ProductionAdd extends BaseProduction {
  Fecha_Produccion: string | Date;
  Id_Empleado_Produccion: string;
  Id_Producto_Produccion: string;
}
