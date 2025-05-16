import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class EmailValidator {
  static validate: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const email = control.value;
    if (!email) {
      return null;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const valid = emailRegex.test(email);
    return valid ? null : { email: true };
  };
} 