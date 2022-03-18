interface Contact {
    id: number;
}

const currentUser = {
    id: 1234,
    roles: ["ContactEditor"],
    isAuthenticated() { return !!this.id; },
    isInRole(role: string): boolean {
        return this.roles.contains(role);
    }
}

@freeze
@singleton
class ContactRepository {
    @auditable
    private contacts: Contact[] = [];

    getContactById(id: number): Contact | null {
        const t0 = performance.now()
        console.trace(`ContactRepository.getContactById: BEGIN`);

        const contact = this.contacts.find(x => x.id === id);

        const t1 = performance.now();
        const execTime = t1 - t0;
        console.debug(`ContactRepository.getContactById: END  (${execTime} ms)`);

        return contact;
    }

    @authorize("ContactEditor")
    save(contact: Contact): void {
        const t0 = performance.now()
        console.trace(`ContactRepository.save: BEGIN`);

        const existing = this.getContactById(contact.id);

        if (existing) {
            Object.assign(existing, contact);
        } else {
            this.contacts.push(contact);
        }

        const t1 = performance.now();
        const execTime = t1 - t0;
        console.debug(`ContactRepository.save: END (${execTime} ms)`);
    }
}

function authorize(role: string) {
    return function authorizeDecorator(target: any, property: string, descriptor: PropertyDescriptor) {
        const wrapped = descriptor.value;

        descriptor.value = function () {
            if (!currentUser.isAuthenticated()) {
                throw Error("User is not authenticated");
            }
            if (!currentUser.isInRole(role)) {
                throw Error(`User not in role ${role}`);
            }

            return wrapped.apply(this, arguments);
        }
    }
}

function freeze(constructor: Function) {
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
}

function singleton<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class Singleton extends constructor {
        static _instance = null;

        constructor(...args) {
            if (Singleton._instance)
                throw "Duplicate instance";

            super(...args);

            Singleton._instance = this;
        }
    }
}

function auditable(target: Object, key: string | symbol) {
    // get the initial value, before the decorator is applied
    let val = target[key];
  
    // then overwrite the property with a custom getter and setter
    Object.defineProperty(target, key, {
      get: () => val,
      set: (newVal) => {
        console.log(`${key.toString()} changed: `, newVal);
        val = newVal;
      },
      enumerable: true,
      configurable: true,
    });
  }