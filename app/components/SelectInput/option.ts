export interface inputOption {
  value: string;
  label: string;
}
export interface DropdownProps {
  options: inputOption[];
  lable?: string;
  initialValue?: string;
  error?: string;
  onChange?: (value: string) => void;
  value?: string;
}

 


 
