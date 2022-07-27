import { toBase64String } from "@angular/compiler/src/output/source_map";

export class AcercaDe {
    id?:number;
    acercaDe: string;
   
    constructor(idPersona: number, acercaDe: string){
        this.acercaDe = acercaDe;
        this.id = idPersona;
       
    }

}