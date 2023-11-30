import axios from "axios";
import * as z from "zod";

export const onSubmitRegister = async (
  values: z.ZodObjectDef
) => {
  console.log(values);
};

export const onSubmitLogIn = async (values: {
  Username: string;
  Password: string;
}) => {
  axios
    .post("api/authorization/login", {
      username: values.Username,
      password: values.Password,
    })
    .then(() => window.location.reload())
    .catch((e) => console.error(e));
};
