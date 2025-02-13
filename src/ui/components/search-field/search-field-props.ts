import { InputHTMLAttributes } from 'react';

export interface SearchFieldProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'type' | 'placeholder' | 'id'
  > {
  name: string;
  label?: string;
  fullWidth?: boolean;
}
