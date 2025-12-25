import { object, string, ref } from 'yup';

export const formSchema = object({
  email: string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  password: string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  repeatEmail: string()
    .oneOf([ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
});      