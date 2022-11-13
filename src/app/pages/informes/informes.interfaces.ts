export interface Report {
  Id_produccion: string;
  Fecha: string | Date;
  Nombre_empleado: string;
  Apellido_empleado: string;
  Nombre_producto: string;
  num_totalProduccion: number;
  num_Defectuosos_Produccion: number;
}
