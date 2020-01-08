
export interface Repair {
    responsable:string;
    gov:string;
    service :string;
    name:string;
    phone:string;
    tel:string;
    adresse:string;
    statut:string;
    equipemenet:string;
    brand:string;
    file:string;
    issue:string;
    etat:string;
    notif: string;
    date: string;
}
export const initRepair:Repair = {
    responsable:"",
    gov:"",
    service :"",
    name:"",
    phone:"",
    tel:"",
    adresse:"",
    statut:"",
    equipemenet:"",
    brand:"",
    file:"",
    issue:"",
    etat:"Order create",
    notif:"0",
    date: new Date().toLocaleString(),
}