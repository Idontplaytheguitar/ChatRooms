import { ZodSchemaCreate } from "fndtn/interfaces/ZodSchemaCreate";
import * as z from "zod";

export const generateZodObject = (
  options: ZodSchemaCreate[]
) => {
  const schemaObject: Record<string, any> = {};

  options.forEach((option) => {
    if (option.value === "string") {
      // StringOption
      schemaObject[option.name] = z
        .string()
        .min(option.restrictions.min || 2, {
          message: option.restrictions.messageMin,
        })
        .max(option.restrictions.max || 25, {
          message: option.restrictions.messageMax,
        });
    } else if (
      option.value === "boolean"
    ) {
      // BooleanOption
      schemaObject[option.name] = z.boolean();
    } else if(
      option.value === 'string[]'
    ) {
      // EnumOption
      schemaObject[option.name] = z.enum(
        option.enum as any as [
          string,
          ...string[]
        ]
      );
    }
  });

  return z.object(schemaObject);
};

export const onSubmit = (
  values: z.ZodObjectDef
) => {
  console.log(values);
};
