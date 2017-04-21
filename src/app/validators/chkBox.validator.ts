import { AbstractControl } from '@angular/forms';

export class ChkboxValidator {

    public static validate(c: AbstractControl) {
        return c.value ? null : {
            validateChkBox: {
                valid: false
            }
        };
    }
}
