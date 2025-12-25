import { object, string, date } from 'yup';

export const formSchema = object({
  fullName: string()
    .required('Full name is required')
    .min(2, 'Name must be at least 2 characters'),
  constituency: string()
    .required('Constituency is required'),
  dateOfBirth: date()
    .required('Work start date is required')
    .max(new Date(), 'Work start date cannot be in the future'),
  workInfo: string()
    .required('Programming field is required')
    .min(2, 'Please select a programming field'),
  position: string()
    .required('Experience level is required')
    .min(2, 'Please select an experience level'),
  gender: string()
    .required('Gender is required'),
  message: string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters'),
  degree: string()
    .required('Degree is required')
    .min(2, 'Degree must be at least 2 characters'),
  institution: string()
    .required('Institution is required')
    .min(2, 'Institution must be at least 2 characters'),
  graduationDate: date()
    .required('Graduation date is required')
    .max(new Date(), 'Graduation date cannot be in the future'),
});