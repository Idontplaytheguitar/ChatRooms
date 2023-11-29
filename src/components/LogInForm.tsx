'use client'

import { onSubmitLogIn } from "fndtn/app/formUtils/userForm"
import { FormReusable } from "./FormReusable"
import { formLogIn } from "cms/Forms"


export default function LogInForm(){
    return (
        <FormReusable items={formLogIn} onSubmit={onSubmitLogIn}/>
    )
}