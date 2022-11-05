export interface BaseProduction {
  Id_Producción?: string;
  num_totalProduccion: string;
  num_Defectuosos_Producción: string;
}

export interface ProductionList extends BaseProduction {
  Nombre_encargado: string;
  Apellido_encargado: string;
  Nombre_Producto: string;
  Fecha: Date | string;
}
