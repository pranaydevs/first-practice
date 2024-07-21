export interface FormItem {
    name?: string;
    label: string;
    validate?: (value: any) => undefined | string | Promise<any>;
  type?: string;
  multiple?: boolean;
  value?: string;
  onChange?: any;
  error?: boolean;
  helperText?: string;
  }

  export interface Icontactinput{
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  }