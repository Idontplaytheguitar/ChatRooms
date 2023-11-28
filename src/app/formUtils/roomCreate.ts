import * as z from "zod";

export const onSubmit = (
  values: z.ZodObjectDef
) => {
  console.log(values);
};
