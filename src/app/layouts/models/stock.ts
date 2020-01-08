export interface Stock {
    reference: string;
    equipment: string;
    brand: string;
    name: string;
    price: string;
    picture: string;
    description: string;
    qte: string;
}

export const initStock:Stock = {
    reference: "",
    equipment: "",
    brand: "",
    name: "",
    price: "",
    picture: "",
    description: "",
    qte: "", 
}