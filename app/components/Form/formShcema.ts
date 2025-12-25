import { object, string, number, date, InferType } from 'yup';

export const formSchema = object({
    fullName: string().required().min(2),
    constituency: string().required(),
    dateOfBirth: date().required().max(new Date()),
    workInfo: string().required().min(2),
    position: string().required().min(2),
    gender: string().required(),
    message: string().required().min(10),
    degree: string().required().min(2),
    institution: string().required().min(2),
    graduationDate: date().required().max(new Date()),
})