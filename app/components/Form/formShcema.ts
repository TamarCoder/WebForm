import { object, string, number, date, InferType } from 'yup';

export const formSchema = object({
    fullName: string().required('Full Name is required').min(2, 'Full Name must be at least 2 characters'),
    constituency: string().required('Constituency is required'),
    age: number().required('Age is required').min(0, 'Age must be a positive number').max(120, 'Age seems invalid'),
    dateOfBirth: date().required('Date of Birth is required').max(new Date(), 'Date of Birth cannot be in the future'),
    workInfo: string().required ('Work Information is required').min(2, 'Work Information must be at least 2 characters'),
    position: string().required('Position is required').min(2, 'Position must be at least 2 characters'),
    gender: string().required('Gender is required'),
    message: string().required('Message is required').min(10, 'Message must be at least 10 characters'),
    degree: string().required('Education is required').min(2, 'Education must be at least 2 characters'),
    institution: string().required('Institution is required').min(2, 'Institution must be at least 2 characters'),
    graduationDate: date().required('Graduation Date is required').max(new Date(), 'Graduation Date cannot be in the future'),
})