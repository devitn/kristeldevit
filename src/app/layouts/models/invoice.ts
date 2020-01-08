export interface Invoice {
    ref: string;
    designation: string;
    price: string;
    qte: string;
}

export const initInvoice:Invoice = {
    ref: "",
    designation: "",
    price: "",
    qte: "", 
}