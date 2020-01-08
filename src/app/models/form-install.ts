
export interface Install {
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
export const initInstall:Install = {
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