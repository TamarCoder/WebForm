import { object, string, number, date, InferType, ref } from 'yup';


export const formSchema = object({
     email: string().email().required('Email is required'),
     password: string().min(6).required('Password is required'),
     repeatEmail: string()
       .oneOf([ref('password')], 'Password must match')
       .required('Please confirm your password'),
})      