import axios from "axios";
import { cookies } from "next/headers";
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
    // check the match
    const r = await axios.post(
      "http://localhost:3001/auth",
      {
        username: values.Username,
        password: values.Password,
      }
    );
    if (r.status === 200) {
      try {
        // if it matches, log in
        const r = await axios.post(
          "http://localhost:3001/auth/login",
          {
            username: values.Username,
            password: values.Password,
          }
        );
        cookies().set(
          "access_token",
          r.data.access_token
        );
      } catch (e) {
        console.log(e);
      }
    }
  } catch (e) {
    console.log(e);
  }
};
