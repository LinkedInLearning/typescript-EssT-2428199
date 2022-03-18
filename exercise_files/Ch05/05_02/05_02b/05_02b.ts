class Contact {

    @required
    id: number;

    name: string;

    email: string;

    age: number;
}

interface ValidationRule {
    validate<TValue>(value: TValue): boolean;
    error: string;
}

function setValidation<TValue>(target: any, propertyKey: string, validator: ValidationRule) {
    const validations: Record<string, ValidationRule[]> = target.__validations = target.__validations ?? { pro};
    validations.push()
}

function required(target: any, propertyKey: string) {
    const 
    return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
  }