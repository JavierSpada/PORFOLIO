export class Persona {
    id?:number;
    acercaDe: string;
    nombre: string;
    apellido: string;
    urlFotoPerfil: string;
    puesto: string;
   
    constructor(idPersona: number, acercaDe: string, nombre: string, apellido: string, urlFotoPerfil: string,
        puesto: string){
        this.acercaDe = acercaDe;
        this.id = idPersona;
        this.nombre = nombre;
        this.apellido = apellido;
        this.nombre = nombre;
        this.urlFotoPerfil = urlFotoPerfil;
        this.puesto = puesto;
    }

}