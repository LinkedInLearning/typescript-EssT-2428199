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

function getValue(source, propertyName) {
    return source[propertyName];
}
