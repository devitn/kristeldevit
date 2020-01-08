export interface Maintenance {
    responsable:string;
    gov:string;
    service :string;
    name:string;
    phone:string;
    tel:string;
    adresse:string;
    equipemenet:string;
    brand:string;
    etat:string;
    notif: string;
    date: string;
}
export const initMaintenance:Maintenance = {
    responsable:"",
    gov:"",
    service :"",
    name:"",
    phone:"",
    tel:"",
    adresse:"",
    equipemenet:"",
    brand:"",
    etat:"Order create",
    notif:"0",
    date: new Date().toLocaleString(),
}