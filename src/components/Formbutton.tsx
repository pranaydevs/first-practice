import { Button } from '@mui/material'
import { useFormikContext } from 'formik'
import React from 'react'

const formbutton = ({children, ...otherProps}:any) => {
    const {submitForm} = useFormikContext();

    const handleSubmit = () => {
        submitForm();
    }

    const configButton = {
        onClick: handleSubmit,
        variant: 'contained',
        fullWidhth: 'true',
        color: 'primary',
    }


  return (
    <Button {...configButton}>
        {children}
    </Button>
  )
}

export default formbutton