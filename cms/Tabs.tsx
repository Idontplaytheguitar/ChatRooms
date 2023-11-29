import LogInForm from "fndtn/components/LogInForm";
import RegisterForm from "fndtn/components/RegisterForm";
import { ITabsItem } from "fndtn/interfaces/ITabsItem";

export const TabsLoginRegister: ITabsItem[] = [
  {
    content: <LogInForm />,
    trigger: "Log In",
    triggerValue: "Login",
  },
  {
    content: <RegisterForm />,
    trigger: "Register",
    triggerValue: "Register",
  },
];
