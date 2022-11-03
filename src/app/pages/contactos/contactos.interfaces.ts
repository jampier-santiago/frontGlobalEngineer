interface BaseContact {
  Id_Contactos?: string;
  Dato_Contacto: string;
  Tipo_Contacto: string;
}

export interface SendContact extends BaseContact {
  Encargado_Contacto: string;
}

export interface Contacto extends BaseContact {
  Nombre_contacto: string;
  Apellido_Contacto: string;
}

export interface ContactType {
  name: string;
  code: string;
}
