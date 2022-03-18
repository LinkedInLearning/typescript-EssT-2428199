type ContactName = string;

enum ContactStatus {
    Active = "active",
    Inactive = "inactive",
    New = "new"
}

interface Contact {
    id: number;
    name: ContactName;
    birthDate?: Date;
    status: ContactStatus;
}

let primaryContact: Contact = {
    id: 12345,
    name: "Jamie Johnson",
    status: ContactStatus.Active
}