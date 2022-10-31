export interface Person {
  Id_Encargado: string;
  Nom1_Encargado: string;
  Nom2_Encargado: string;
  Apell1_Encargado: string;
  Apell2_Encargado: string;
  Sexo_Encargado: string;
  FechaNacimiento_Encargado: Date | string;
  Tip_Doc_Encargado: string | number;
  Rol_Encargado: string | number;
  num_Doc_Encargado: string;
}

export interface Select {
  name: string;
  code: string;
}
