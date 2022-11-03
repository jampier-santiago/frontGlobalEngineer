interface BaseProduct {
  Id_Producto?: string;
  Nombre_Producto: string;
  Peso_Producto: string;
  Dimensiones_Producto: string;
}

export interface Product extends BaseProduct {
  Estilo_Producto: string;
  Tipo_producto: string;
}
