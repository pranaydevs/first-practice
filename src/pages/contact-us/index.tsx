import Formfieldswrapper from '@/components/Formfields';
import Formbutton from '@/components/Formbutton';
import { Button, Grid, Typography } from '@mui/material';
import { Form, Formik } from 'formik'
import React from 'react'
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// import { contactMutation } from '../../../api/functions/user.api';

interface FormFields {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}
const contactUsSchema = yup.object().shape({
    firstName: yup.string().required('Please enter the first Name.'),
    lastName: yup.string().required('Please enter the last Name.'),
    email: yup.string().required('Please enter your email address.').email('Please enter the valid email address.'),
    phone: yup
        .string()
        .trim()
        .min(8, "Enter at least 8 digits")
        .max(15, "Enter at most 15 digits")
        .required("Please enter phone number"),
});

const generateInitialFormFields = (): FormFields => {
    return {
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
    };
};

const Index = () => {

    // const { mutate, isLoading } = useMutation(contactMutation);
    const { handleSubmit, reset, control } = useForm<FormFields>({
        resolver: yupResolver(contactUsSchema),
        mode: "all",
        defaultValues: generateInitialFormFields()
    });

    const onSubmit = (data: FormFields) => {
        console.log(data, "data==>")
        //   mutate(data, {
        //     onSuccess: (resp) => {
        //       
        //       reset();
        //     },
        //     onError: (error) => {}
        //   });
    };
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
                            name="firstName"
                            control={control}
                            render={({
                                field: { onChange, value },
                                fieldState: { error, invalid }
                            }) => (
                                <Formfieldswrapper label="first Name" value={value} onChange={(e: { target: { value: string; }; }) => {
                                    const newValue = e.target.value.replace(
                                        /[^a-zA-Z\s]/g,
                                        ""
                                    );
                                    onChange(newValue);
                                }} error={invalid}
                                    helperText={error?.message} />
                            )}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <Controller
                            name="lastName"
                            control={control}
                            render={({
                                field: { onChange, value },
                                fieldState: { error, invalid }
                            }) => (
                                <Formfieldswrapper label="last Name" value={value}
                                    onChange={(e: { target: { value: string; }; }) => {
                                        const newValue = e.target.value.replace(
                                            /[^a-zA-Z\s]/g,
                                            ""
                                        );
                                        onChange(newValue);
                                    }}
                                    error={invalid}
                                    helperText={error?.message} />
                            )}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <Controller
                            name="email"
                            control={control}
                            render={({
                                field: { onChange, value },
                                fieldState: { error, invalid }
                            }) => (
                                <Formfieldswrapper name="email" label="email" error={invalid}
                                    helperText={error?.message} onChange={onChange} />)}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <Controller
                            name="phone"
                            control={control}
                            render={({
                                field: { onChange, value },
                                fieldState: { error, invalid }
                            }) => (
                                <Formfieldswrapper label="Phone Number" value={value}
                                    type="number"
                                    onChange={(e: { target: { value: string; }; }) => {
                                        const newValue = e.target.value.replace(/[e-]/gi, "");
                                        if (newValue.length <= 15) {
                                            onChange(newValue);
                                        }
                                    }}
                                    onKeyDown={(e: { key: string; preventDefault: () => void; }) => {
                                        if (e.key === "e" || e.key === "-") {
                                            e.preventDefault();
                                        }
                                    }}
                                    error={invalid}
                                    helperText={error?.message} />
                            )}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button type="submit">
                            Submit Form
                        </Button>
                    </Grid>

                </Grid>

            </form>
            {/* </Formik> */}
        </div>
    )
}

export default Index