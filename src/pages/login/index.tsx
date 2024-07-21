import React, { useEffect, useState } from 'react'
import { Button, Grid, Typography } from '@mui/material';
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Formfieldswrapper from '@/components/Formfields';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { storeToken } from "@/lib/actions";

interface Loginfields{
    username: string;
    password: string;
}


const loginFormSchema = yup.object().shape({
    username: yup.string().required("Please enter username"),
    password: yup.string().required("Please enter Password").min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

const generateInitialFormFields = (): Loginfields => {

    return{
        username: "",
        password: "",
    }
}


const login = () => {

    const [myUser, setMyUser] = useState([]);

    const notify = () => toast("Wow so easy!");

    const {handleSubmit, reset, control} = useForm<Loginfields>({
        resolver: yupResolver(loginFormSchema),
        mode: "all",
        defaultValues : generateInitialFormFields()
    })

    const onSubmit = (data: Loginfields) =>{

        const myemail = data.username;
        console.log(myemail);
        
        const mypassword = data.password;
        console.log(mypassword);
      
        
        
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              
              username: data.username,
              password: data.password,
              expiresInMins: 30, // optional, defaults to 60
            })
          })
          .then(res => res.json())
          .then((data) => {
            console.log(data);
            toast("You are logged in!");
            setMyUser(data);
            storeToken(data);
            

          });

    
    
    }

    console.log({myUser}, "data=>");

  return (
    <div>
    
    <form onSubmit={handleSubmit(onSubmit)}>

<Grid container spacing={2}>

    <Grid item xs={12}>
        <Typography>
            Your Details
        </Typography>
    </Grid>
    

    <Grid item xs={6}>
        <Controller
            name="username"
            control={control}
            render={({
                field: { onChange, value },
                fieldState: { error, invalid }
            }) => (
                <Formfieldswrapper name="username" label="username" error={invalid}
                    helperText={error?.message} onChange={onChange} />)}
        />
    </Grid>

    <Grid item xs={6}>
        <Controller
            name="password"
            control={control}
            render={({
                field: { onChange, value },
                fieldState: { error, invalid }
            }) => (
                <Formfieldswrapper label="Password" value={value}
                    type="password"
                    onChange={onChange}
                    error={invalid}
                    helperText={error?.message} />
            )}
        />
    </Grid>

    <Grid item xs={12}>
        <Button type="submit">
            Submit Form
        </Button>
        <ToastContainer />
    </Grid>

</Grid>

</form>

    </div>
  )
}

export default login