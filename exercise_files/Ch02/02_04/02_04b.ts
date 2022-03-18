type ContactName = string;

interface Contact {
    id: number;
    name: ContactName;
    birthDate?: Date;
}

let primaryContact: Contact = {
    id: 12345,
    name: "Jamie Johnson"
}