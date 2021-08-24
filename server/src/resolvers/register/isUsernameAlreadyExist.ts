import { registerDecorator,ValidationOptions,ValidatorConstraint,ValidatorConstraintInterface } from 'class-validator';
import User from '../../entity/User';
  
@ValidatorConstraint({ async: true })
export class isUsernameAlreadyExistConstraint implements ValidatorConstraintInterface {
    validate(username: string): Promise<boolean> {
      return User.findOne({ username: username }).then(user => {
        if (user) return false;
        return true;
      });
    }
}
  
export function IsUsernameAlreadyExist(validationOptions?: ValidationOptions) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function (object: Object, propertyName: string): void {
      registerDecorator({
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        constraints: [],
        validator: isUsernameAlreadyExistConstraint,
      });
    };
}