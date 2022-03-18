type ContactStatus = "active" | "inactive" | "new";

interface Contact {
    id: number;
    name: string;
    status: ContactStatus;
}

const contact: Contact = {
    id: 1,
    name: "Shawn Carter",
    status: "active"
};

function getValue<T, U extends keyof T>(source: T, propertyName: U) {
    return source[propertyName];
}

type ContactFields = keyof Contact;

const field: ContactFields = "active";

const value = getValue(contact, "sttaus");

const secondValue = getValue({ min: 1, max: 200}, "max");