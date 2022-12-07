import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from '@angular/forms';

export function createPasswordMatchValidator(): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {

      const passwordConfirm = control.get('passwordConfirm');
      const password = control.get('password');
      return password?.value === passwordConfirm?.value ? null : { passwordMismatch: true}
  }
}

@Directive({
    selector: "[passwordMismatch]",
    providers: [{
        provide: NG_VALIDATORS,
        useExisting:PasswordMatchDirective,
        multi: true
    }]
})
export class PasswordMatchDirective implements Validator {

    validate(control: AbstractControl): ValidationErrors | null {
        return createPasswordMatchValidator()(control);
    }


}