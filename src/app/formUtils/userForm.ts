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
  try {
    const r = await axios.post(
      "api/authorization",
      {
        username: values.Username,
        password: values.Password,
      }
    );

    return r;
  } catch (e) {
    console.log(e);
  }
};
