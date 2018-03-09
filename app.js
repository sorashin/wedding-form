import {MDCRipple} from '@material/ripple';
const ripple = new MDCRipple(document.querySelector('.foo-button'));
// import {MDCTextField} from '@material/textfield';
// const value = new MDCTextField(document.querySelector('.my-input'));
// import {MDCFormField} from '@material/form-field';
// const formField = new MDCFormField(document.querySelector('.mdc-form-field'));

      function toggleRequired(textfield, isRequired) {
        textfield.required = isRequired;
      }
      function togglePattern(textfield, checked) {
        textfield.pattern = checked ? '.{8,}' : '.*';
      }
      demoReady(function() {
        var tfEl = document.getElementById('tf-outlined-example');
        var tfHelperText = document.getElementById('tf-outlined-validation-msg');
        var tf = new mdc.textField.MDCTextField(tfEl);
        var outlinedInputEl = tfEl.querySelector('input');
        var wrapper = document.getElementById('demo-tf-outlined-wrapper');
        var plainHelperText = 'Helper Text (possibly validation message)';
        var minLengthError = 'Must be at least 8 characters';
        var maxLengthError = 'Must not exceed 10 characters';
        document.getElementById('outlined-disable').addEventListener('change', function(evt) {
          tf.disabled = evt.target.checked;
        });
        document.getElementById('outlined-rtl').addEventListener('change', function(evt) {
          if (evt.target.checked) {
            wrapper.setAttribute('dir', 'rtl');
          } else {
            wrapper.removeAttribute('dir');
          }
          tf.layout();
        });
        document.getElementById('outlined-custom-colors').addEventListener('change', function(evt) {
          tfEl.classList[evt.target.checked ? 'add' : 'remove']('demo-text-field-custom-colors');
          tfEl.classList[evt.target.checked ? 'add' : 'remove']('demo-text-field-custom-error-colors');
        });
        document.getElementById('outlined-dense').addEventListener('change', function(evt) {
          tfEl.classList[evt.target.checked ? 'add' : 'remove']('mdc-text-field--dense');
          tf.layout();
        });
        document.getElementById('outlined-required').addEventListener('change', function(evt) {
          toggleRequired(tf, evt.target.checked);
        });
        document.getElementById('outlined-minlength').addEventListener('change', function(evt) {
          tf.minLength = evt.target.checked ? 8 : 0;
        });
        document.getElementById('outlined-maxlength').addEventListener('change', function(evt) {
          tf.maxLength = evt.target.checked ? 10 : -1;
        });
        outlinedInputEl.addEventListener('blur', function() {
          if (outlinedInputEl.validity.tooShort) {
            tf.helperTextContent = minLengthError;
          } else if (outlinedInputEl.validity.tooLong) {
            tf.helperTextContent = maxLengthError;
          } else {
            tf.helperTextContent = plainHelperText;
          }
        });
      });
      demoReady(function() {
        var tfEl = document.getElementById('tf-box-example');
        var tf = new mdc.textField.MDCTextField(tfEl);
        var wrapper = document.getElementById('demo-tf-box-wrapper');
        var helperText = document.getElementById('box-name-validation-message');
        document.getElementById('box-disable').addEventListener('change', function(evt) {
          tf.disabled = evt.target.checked;
        });
        document.getElementById('box-rtl').addEventListener('change', function(evt) {
          if (evt.target.checked) {
            wrapper.setAttribute('dir', 'rtl');
          } else {
            wrapper.removeAttribute('dir');
          }
          tf.layout();
        });
        document.getElementById('box-dense').addEventListener('change', function(evt) {
          tfEl.classList[evt.target.checked ? 'add' : 'remove']('mdc-text-field--dense');
          tf.layout();
        });
        document.getElementById('box-alternate-colors').addEventListener('change', function (evt) {
          var target = evt.target;
          tfEl.classList[target.checked ? 'add' : 'remove']('demo-text-field-custom-colors');
          tfEl.classList[target.checked ? 'add' : 'remove']('demo-text-field-custom-error-colors');
        });
        document.getElementById('box-required').addEventListener('change', function(evt) {
          toggleRequired(tf, evt.target.checked);
        });
        document.getElementById('box-pattern').addEventListener('change', function(evt) {
          var checked = evt.target.checked;
          var requiredHelperText = 'Must be at least 8 characters';
          var plainHelperText = 'Helper Text (possibly validation message)';
          togglePattern(tf, checked);
          tf.helperTextContent = checked ? requiredHelperText : plainHelperText;
        });
        document.getElementById('box-use-helper-text').addEventListener('change', function(evt) {
          var target = evt.target;
          helperText.style.display = target.checked ? 'block' : 'none';
          document.getElementById('box-persistent-helper-text').disabled = !target.checked;
          document.getElementById('box-helper-text-as-validation').disabled = !target.checked;
        });
        document.getElementById('box-persistent-helper-text').addEventListener('change', function(evt) {
          var target = evt.target;
          helperText.classList[target.checked ? 'add' : 'remove'](
            'mdc-text-field-helper-text--persistent'
          );
        });
        document.getElementById('box-helper-text-as-validation').addEventListener('change', function(evt) {
          helperText.classList[evt.target.checked ? 'add' : 'remove'](
            'mdc-text-field-helper-text--validation-msg'
          );
        });
      });
      demoReady(function() {
        var tfs = document.querySelectorAll(
          '.mdc-text-field:not([data-demo-no-auto-js])'
        );
        for (var i = 0, tf; tf = tfs[i]; i++) {
          mdc.textField.MDCTextField.attachTo(tf);
        }
      });
      demoReady(function() {
        var tfIconContainer = document.getElementById('demo-tf-icon-container');
        var tfBoxLeadingEl = document.getElementById('tf-box-leading-example');
        var tfBoxLeading = new mdc.textField.MDCTextField(tfBoxLeadingEl);
        var wrapperBoxLeading = document.getElementById('demo-tf-box-leading-wrapper');
        var tfBoxTrailingEl = document.getElementById('tf-box-trailing-example');
        var tfBoxTrailing = new mdc.textField.MDCTextField(tfBoxTrailingEl);
        var wrapperBoxTrailing = document.getElementById('demo-tf-box-trailing-wrapper');
        var tfOutlinedLeadingEl = document.getElementById('tf-outlined-leading-example');
        var tfOutlinedLeading = new mdc.textField.MDCTextField(tfOutlinedLeadingEl);
        var wrapperOutlinedLeading = document.getElementById('demo-tf-outlined-leading-wrapper');
        var tfOutlinedTrailingEl = document.getElementById('tf-outlined-trailing-example');
        var tfOutlinedTrailing = new mdc.textField.MDCTextField(tfOutlinedTrailingEl);
        var wrapperOutlinedTrailing = document.getElementById('demo-tf-outlined-trailing-wrapper');
        var tfIcons = document.querySelectorAll('.mdc-text-field__icon');
        var tfInputs = tfIconContainer.querySelectorAll('.mdc-text-field__input');
        document.getElementById('disable-leading-trailing').addEventListener('change', function(evt) {
          tfBoxLeading.disabled = evt.target.checked;
          tfBoxTrailing.disabled = evt.target.checked;
          tfOutlinedLeading.disabled = evt.target.checked;
          tfOutlinedTrailing.disabled = evt.target.checked;
        });
        document.getElementById('rtl-leading-trailing').addEventListener('change', function(evt) {
          if (evt.target.checked) {
            wrapperBoxLeading.setAttribute('dir', 'rtl');
            wrapperBoxTrailing.setAttribute('dir', 'rtl');
            wrapperOutlinedLeading.setAttribute('dir', 'rtl');
            wrapperOutlinedTrailing.setAttribute('dir', 'rtl');
          } else {
            wrapperBoxLeading.removeAttribute('dir');
            wrapperBoxTrailing.removeAttribute('dir');
            wrapperOutlinedLeading.removeAttribute('dir');
            wrapperOutlinedTrailing.removeAttribute('dir');
          }
          tfBoxLeading.layout();
          tfBoxTrailing.layout();
          tfOutlinedLeading.layout();
          tfOutlinedTrailing.layout();
        });
        document.getElementById('dense-leading-trailing').addEventListener('change', function(evt) {
          tfBoxLeadingEl.classList[evt.target.checked ? 'add' : 'remove']('mdc-text-field--dense');
          tfBoxLeading.layout();
          tfBoxTrailingEl.classList[evt.target.checked ? 'add' : 'remove']('mdc-text-field--dense');
          tfBoxTrailing.layout();
          tfOutlinedLeadingEl.classList[evt.target.checked ? 'add' : 'remove']('mdc-text-field--dense');
          tfOutlinedLeading.layout();
          tfOutlinedTrailingEl.classList[evt.target.checked ? 'add' : 'remove']('mdc-text-field--dense');
          tfOutlinedTrailing.layout();
        });
        document.getElementById('unclickable-leading-trailing').addEventListener('change', function(evt) {
          [].forEach.call(tfIcons, function (icon) {
            icon.setAttribute('tabindex', evt.target.checked ? '-1' : '0');
          });
        });
        document.getElementById('required-leading-trailing').addEventListener('change', function(evt) {
          var checked = evt.target.checked;
          toggleRequired(tfBoxLeading, checked);
          toggleRequired(tfBoxTrailing, checked);
          toggleRequired(tfOutlinedLeading, checked);
          toggleRequired(tfOutlinedTrailing, checked);
        });
        document.getElementById('pattern-leading-trailing').addEventListener('change', function(evt) {
          var checked = evt.target.checked;
          togglePattern(tfBoxLeading, checked);
          togglePattern(tfBoxTrailing, checked);
          togglePattern(tfOutlinedLeading, checked);
          togglePattern(tfOutlinedTrailing, checked);
        });
        document.getElementById('leading-trailing-alternate-colors').addEventListener('change', function(evt) {
          tfBoxLeadingEl.classList[evt.target.checked ? 'add' : 'remove']('demo-text-field-custom-colors');
          tfBoxLeadingEl.classList[evt.target.checked ? 'add' : 'remove']('demo-text-field-custom-error-colors');
          tfBoxLeading.layout();
          tfBoxTrailingEl.classList[evt.target.checked ? 'add' : 'remove']('demo-text-field-custom-colors');
          tfBoxTrailingEl.classList[evt.target.checked ? 'add' : 'remove']('demo-text-field-custom-error-colors');
          tfBoxTrailing.layout();
          tfOutlinedLeadingEl.classList[evt.target.checked ? 'add' : 'remove']('demo-text-field-custom-colors');
          tfOutlinedLeadingEl.classList[evt.target.checked ? 'add' : 'remove']('demo-text-field-custom-error-colors');
          tfOutlinedLeading.layout();
          tfOutlinedTrailingEl.classList[evt.target.checked ? 'add' : 'remove']('demo-text-field-custom-colors');
          tfOutlinedTrailingEl.classList[evt.target.checked ? 'add' : 'remove']('demo-text-field-custom-error-colors');
          tfOutlinedTrailing.layout();
        });
      });
      demoReady(function() {
        var section = document.getElementById('demo-text-field-wrapper');
        var tfRoot = section.querySelector('.mdc-text-field');
        var helperText = section.querySelector('.mdc-text-field-helper-text');
        var tf = new mdc.textField.MDCTextField(tfRoot);
        document.getElementById('disable').addEventListener('change', function(evt) {
          var target = evt.target;
          tf.disabled = target.checked;
        });
        document.getElementById('rtl').addEventListener('change', function(evt) {
          var target = evt.target;
          if (target.checked) {
            section.setAttribute('dir', 'rtl');
          } else {
            section.removeAttribute('dir');
          }
        });
        document.getElementById('dense').addEventListener('change', function(evt) {
          var target = evt.target;
          tfRoot.classList[target.checked ? 'add' : 'remove']('mdc-text-field--dense');
        });
        document.getElementById('required').addEventListener('change', function(evt) {
          toggleRequired(tf, evt.target.checked);
        });
        document.getElementById('alternate-colors').addEventListener('change', function (evt) {
          var target = evt.target;
          tfRoot.classList[target.checked ? 'add' : 'remove']('demo-text-field-custom-colors');
          tfRoot.classList[target.checked ? 'add' : 'remove']('demo-text-field-custom-error-colors');
        });
        document.getElementById('use-helper-text').addEventListener('change', function(evt) {
          var target = evt.target;
          helperText.style.display = target.checked ? 'block' : 'none';
          document.getElementById('persistent-helper-text').disabled = !target.checked;
          document.getElementById('helper-text-as-validation').disabled = !target.checked;
        });
        document.getElementById('persistent-helper-text').addEventListener('change', function(evt) {
          var target = evt.target;
          helperText.classList[target.checked ? 'add' : 'remove'](
            'mdc-text-field-helper-text--persistent'
          );
        });
        document.getElementById('helper-text-as-validation').addEventListener('change', function(evt) {
          var target = evt.target;
          helperText.classList[target.checked ? 'add' : 'remove'](
            'mdc-text-field-helper-text--validation-msg'
          );
        });
      });
      demoReady(function() {
        var section = document.getElementById('demo-text-field-textarea-wrapper');
        var tfRoot = section.querySelector('.mdc-text-field');
        var tf = new mdc.textField.MDCTextField(tfRoot);
        document.getElementById('textarea-disable').addEventListener('change', function(evt) {
          var target = evt.target;
          tf.disabled = target.checked;
        });
        document.getElementById('textarea-rtl').addEventListener('change', function(evt) {
          var target = evt.target;
          if (target.checked) {
            section.setAttribute('dir', 'rtl');
          } else {
            section.removeAttribute('dir');
          }
        });
        document.getElementById('textarea-alternate-colors').addEventListener('change', function (evt) {
          var target = evt.target;
          tfRoot.classList[target.checked ? 'add' : 'remove']('demo-textarea');
        });
        document.getElementById('textarea-required').addEventListener('change', function(evt) {
          toggleRequired(tf, evt.target.checked);
        });
      });
      demoReady(function() {
        var section = document.getElementById('demo-fullwidth-wrapper');
        var tfRoot = section.querySelector('.mdc-text-field');
        var tfMultiRoot = section.querySelector('.mdc-text-field--textarea');
        var tf = new mdc.textField.MDCTextField(tfRoot);
        var tfMulti = new mdc.textField.MDCTextField(tfMultiRoot);
        document.getElementById('fullwidth-disable').addEventListener('change', function(evt) {
          var target = evt.target;
          [tf, tfMulti].forEach(function(component) {
            component.disabled = target.checked;
          });
        });
        document.getElementById('fullwidth-dense').addEventListener('change', function(evt) {
          var target = evt.target;
          [tfRoot, tfMultiRoot].forEach(function(el) {
            el.classList[target.checked ? 'add' : 'remove']('mdc-text-field--dense');
          });
        });
        document.getElementById('fullwidth-required').addEventListener('change', function(evt) {
          var checked = evt.target.checked;
          toggleRequired(tf, checked);
          toggleRequired(tfMulti, checked);
        });
        document.getElementById('fullwidth-alternate-colors').addEventListener('change', function (evt) {
          var target = evt.target;
          tfRoot.classList[target.checked ? 'add' : 'remove']('demo-fullwidth-input');
          tfMultiRoot.classList[target.checked ? 'add' : 'remove']('demo-textarea');
        });
      });
