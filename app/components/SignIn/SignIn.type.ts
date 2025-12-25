import { object, string } from 'yup';

export const signInSchema = object({
  email: string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  password: string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});
