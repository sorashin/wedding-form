import mdcAutoInit from '@material/auto-init';
import {MDCRipple} from '@material/ripple';
const ripple = new MDCRipple(document.querySelector('.foo-button'));
import {MDCTextField} from '@material/textfield';
mdc.textField.MDCTextField.attachTo(document.querySelector('.my-input'));
// document.querySelector('.mdc-text-field').MDCTextField.disabled = true;
// document.querySelector('.mdc-text-field').MDCTextField.ripple = ripple;
