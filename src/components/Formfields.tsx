import { TextField } from '@mui/material';
import { useField } from 'formik'
import React from 'react'
import { FormItem } from '@/typescript/formfields.interface'


const Formfieldswrapper = ({...otherProps}:any) => {

    // const [field, meta] = useField(name);
    // const configTextfield = {
    //     ...field,
    //     ...otherProps,
    //     fullWidth:true,
    //     variant:'outlined'
    // }

    // if(meta && meta.touched && meta.error){
    //     configTextfield.error = true;
    //     configTextfield.helperText = meta.error;
    // }

  return (
    <TextField {...otherProps}  />
  )
}

export default Formfieldswrapper