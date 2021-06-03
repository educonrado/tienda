import { AbstractControl } from '@angular/forms';

/*
*  Validador personalizado
*  Recibe un valor y realiza validaciones personalizadas.
*  Retorna null si no hay errores y retore un json con la excepción.
*/
export class MyValidators {

    static isPriceValid(control: AbstractControl): any {
        const value = control.value;
        if (value > 10000) {
            return { price_invalid: true };
        }
        return null;
    }
}
