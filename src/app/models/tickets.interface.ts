export interface Ticket {
    identidad: string;
    estado:    number;
    tramite:   number;
    atencion:  number;
    ticket:    string;
    createdAt?: Date;
    updatedAt?: Date;
    id?:        string;
}
