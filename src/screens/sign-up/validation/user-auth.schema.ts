import {mixed, object, ref, string} from 'yup';

const passwordSpecialChar = /[~`!@#$%^&*()_\-+=\?]/;
export const userAuthSchema = object({
  competition: mixed().required('You must pick a competition to register'),
  email: string()
    .email('Email format is invalid')
    .required('This is a required field.'),
  password: string()
    .required('Password is a required field.')
    .min(8, 'min-required')
    .test('password-strength', 'strength', value => {
      if (!value) return false;

      const checks = [
        /[a-z]/.test(value),
        /[A-Z]/.test(value),
        /\d/.test(value),
        passwordSpecialChar.test(value),
      ];

      return checks.filter(Boolean).length >= 3;
    })
    .matches(
      /^[A-Za-z\d~`!@#$%^&*()_\-+=\?]+$/,
      'Special letters are only limited to (~`!@#$%^&*()_-+=?)',
    ),
  confirm_password: string()
    .required('Confirm password is a required field.')
    .oneOf(
      [ref('password')],
      'New password and Confirm password do not match.',
    ),
  first_name: string().required('This is a required field.'),
  last_name: string().required('This is a required field.'),
});
