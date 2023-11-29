import * as z from "zod";

export const onSubmitRegister = (
  values: z.ZodObjectDef
) => {
  console.log(values);
};

export const onSubmitLogIn = (
    values: z.ZodObjectDef
  ) => {
    console.log(values);
  };