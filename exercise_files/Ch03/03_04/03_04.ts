type ContactStatus = "active" | "inactive" | "new";

interface Address {
    street: string;
    province: string;
    postalCode: string;
}

interface Contact {
    id: number;
    name: string;
    status: ContactStatus;
    address: Address;
}

interface ContactEvent {
    contactId: Contact["id"];
}

interface ContactDeletedEvent extends ContactEvent { 
}

interface ContactStatusChangedEvent extends ContactEvent { 
    oldStatus: Contact["status"];
    newStatus: Contact["status"];
}

interface ContactEvents {
    deleted: ContactDeletedEvent;
    statusChanged: ContactStatusChangedEvent;
    // ... and so on
}

function handleEvent<K extends keyof ContactEvents>(eventName: K, handler: (evt: ContactEvents[K]) => void) {
    if(eventName === "statusChanged") {
        handler({ contactId: 1, oldStatus: "active", newStatus: "inactive" });
    }
}

handleEvent("statusChanged", evt => evt);

type Awesome = Contact["id"]


