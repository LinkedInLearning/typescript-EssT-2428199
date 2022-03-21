interface Contact {
    id: number;
    name: string;
    clone(name: string): Contact
}

function clone(source: Contact): Contact {
    return Object.apply({}, source);
}

const a: Contact = { id: 123, name: "Homer Simpson" };
const b = clone(a)