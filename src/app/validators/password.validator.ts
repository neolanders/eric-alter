import { AbstractControl } from '@angular/forms';

export class PasswordValidator {

  public static validate(c: AbstractControl) {

    // at least 8 characters
    // at least 1 numeric character
    // at least 1 lowercase letter
    // at least 1 uppercase letter

    // let EMAIL_REGEXP = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;   // at least 1 special character
    let EMAIL_REGEXP = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
    return EMAIL_REGEXP.test(c.value) ? null : {
      validatePassword: {
        valid: false
      }
    };
  }
}
