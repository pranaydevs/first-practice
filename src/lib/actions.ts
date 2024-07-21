"use server";


import { cookies } from "next/headers"
//import { setCookie } from 'cookies-next';

interface StoreTokenRequest {
    token: string
    refresh_token: string
}

export async function storeToken(request: StoreTokenRequest) {
    // cookies().set({
    //     name: "accessToken",
    //     value: request.token,
    //     httpOnly: true,
    //     sameSite: "strict",
    //     secure: true,
    // })
    cookies().set('accessToken', request.token, { maxAge: 60 * 60 * 24 });
    cookies().set('refreshToken', request.refresh_token, { maxAge: 60 * 60 * 24 });

    // cookies().set({
    //     name: "refreshToken",
    //     value: request.refresh_token,
    //     httpOnly: true,
    //     sameSite: "strict",
    //     secure: true,
    // })
}