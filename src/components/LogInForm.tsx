'use client'

import { onSubmitLogIn } from "fndtn/utils/authenticationFrontFunctions"
import { FormReusable } from "./FormReusable"
import { formLogIn } from "cms/Forms"


export default function LogInForm(){
    return (
        <FormReusable items={formLogIn} onSubmit={onSubmitLogIn}/>
    )
}