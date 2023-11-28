import * as z from "zod";

export const generateZodObject = (
  options: formType[]
) => {
  const schemaObject: Record<string, any> = {};
  const defaultValues: Record<string, any> = {};

  options.forEach((option) => {
    if (option.type === "Input") {
      // StringOption
      schemaObject[option.name] = z
        .string()
        .min(option.min || 2, {
          message: option.minMessage,
        })
        .max(option.max || 25, {
          message: option.maxMessage,
        });
    } else if (option.type === "Switch") {
      // BooleanOption
      schemaObject[option.name] = z.boolean();
    } else if (option.type === "Select") {
      // EnumOption
      schemaObject[option.name] = z.enum(
        option.options as any as [
          string,
          ...string[]
        ]
      );
    }
    if (option.defaultValue !== undefined)
      defaultValues[option.name] =
        option.defaultValue;
  });
  return {
    schema: z.object(schemaObject),
    defaultValues: defaultValues,
  };
};
