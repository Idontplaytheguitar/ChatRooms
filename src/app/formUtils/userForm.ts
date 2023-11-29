import * as z from "zod";

export const onSubmitRegister = (
  values: z.ZodObjectDef
) => {
  console.log(values);
};
