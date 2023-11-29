'use client'

import { onSubmitRegister } from "fndtn/app/formUtils/userForm"
import { FormReusable } from "./FormReusable"
import { formRegister } from "cms/Forms"

export default function RegisterForm(){
    return (
        <FormReusable items={formRegister} onSubmit={onSubmitRegister}/>
    )
}