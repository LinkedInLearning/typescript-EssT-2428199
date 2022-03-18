interface Contact {
    id: number;
    name: string;
}

function clone(source) {
    return Object.apply({}, source);
}