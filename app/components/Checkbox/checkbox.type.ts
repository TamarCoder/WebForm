import { UseFormRegister, FieldValues } from 'react-hook-form';

export interface CheckboxProps<TFormValues extends FieldValues = FieldValues> {
  name: string;
  label: string;
  value: string;
  disabled?: boolean;
  error?: string;
  register?: UseFormRegister<TFormValues>;
  checked?: boolean;
  onChange?: (checked: boolean, value: string) => void;
  className?: string;
}

export interface CheckboxGroupProps<TFormValues extends FieldValues = FieldValues> {
  name: string;
  label?: string;
  options: { value: string; label: string }[];
  error?: string;
  disabled?: boolean;
  register?: UseFormRegister<TFormValues>;
  selectedValues?: string[];
  onChange?: (selectedValues: string[]) => void;
  className?: string;
  direction?: 'horizontal' | 'vertical';
}
