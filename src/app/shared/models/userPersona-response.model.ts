export interface UserPersonaResponse{
    id: number;
    nombre: string; 
    apellido: string;
    telefono: number;
    email: string;
    rol: 'CUSTOMER' | 'CARER' | null;
    picRuta: string
}