interface Contact {
    id: number;
    name: string;
    birthDate?: Date;
}

let primaryContact: Contact = {
    birthDate: new Date("01-01-1980"),
    id: 12345,
    name: "Jamie Johnson",
}