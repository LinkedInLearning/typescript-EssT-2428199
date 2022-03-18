interface Address {
    line1: string;
    line2: string;
    province: string;
    region: string;
    postalCode: string;
}

type ContactName = string;
type ContactBirthDate = Date | number | string;
type ContactStatus = "active" | "inactive" | "new";

interface Contact {
    id: number;
    name: ContactName;
    birthDate?: ContactBirthDate;
    status: ContactStatus;
}

type AddressableContact = Contact & Address;

let primaryContact: AddressableContact = {
    id: 12345,
    name: "Jamie Johnson",
    status: "active"
}

function getBirthDate(contact: Contact) {
    if(typeof contact.birthDate === "number")
    {
        return new Date(contact.birthDate);
    }
    else if(typeof contact.birthDate === "string") {
        return Date.parse(contact.birthDate);
    }
    else {
        return contact.birthDate;
    }
}