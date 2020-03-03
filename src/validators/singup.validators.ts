import { AbstractControl } from '@angular/forms';

export const validatePassword = (control: AbstractControl) => {
  const password = control.get('password').value || '';
  const password_confirmation = control.get('password_confirmation').value;

  if (password !== password_confirmation) return { invalidPasswordConfirmation: true };
}
