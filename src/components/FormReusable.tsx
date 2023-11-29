"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  ControllerRenderProps,
  useForm,
} from "react-hook-form";
import * as z from "zod";
import { Button } from "fndtn/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "fndtn/components/ui/form";
import { Input } from "fndtn/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "fndtn/components/ui/select";
import { Switch } from "./ui/switch";
import { generateZodObject } from "fndtn/app/formUtils/createZodObject";

export function FormReusable(props: {
  onSubmit: (values: any) => void;
  items: formType[];
}) {
  const { onSubmit, items } = props;

  const { schema, defaultValues } =
    generateZodObject(items);
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      ...defaultValues,
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        {items.length ? (
          items.map((formItem) => {
            const item = (
              field: ControllerRenderProps
            ) => {
              if (formItem.type === "Input") {
                const type = () => {
                  if (
                    formItem.name === "Password"
                  )
                    return "password";
                  if (formItem.name === "Email")
                    return "email";
                  return "text";
                };
                return (
                  <Input
                    type={type()}
                    placeholder={
                      formItem.name &&
                      formItem.placeholder
                    }
                    {...field}
                  />
                );
              }
              if (formItem.type === "Select") {
                return (
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue
                        placeholder={
                          formItem.placeholder ||
                          "Select an option"
                        }
                      />
                    </SelectTrigger>
                    <SelectContent>
                      {formItem.options.length ? (
                        formItem.options.map(
                          (option) => {
                            return (
                              <SelectItem
                                key={option}
                                value={option}
                              >
                                {option}
                              </SelectItem>
                            );
                          }
                        )
                      ) : (
                        <SelectItem value={""}>
                          NO OPTIONS, DEV FIX
                        </SelectItem>
                      )}
                    </SelectContent>
                  </Select>
                );
              }
              if (formItem.type === "Switch") {
                return (
                  <Switch
                    className="flex flex-row"
                    checked={field.value}
                    onCheckedChange={
                      field.onChange
                    }
                  />
                );
              }
            };
            return (
              <FormField
                key={formItem.name}
                control={form.control}
                name={formItem.name}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {formItem.name}
                    </FormLabel>
                    <FormControl>
                      {item(field)}
                    </FormControl>
                    <FormDescription>
                      {`This is the ${formItem.name}` &&
                        formItem.description}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            );
          })
        ) : (
          <h1>No items found. Fix this, dev</h1>
        )}
        <Button
          className="w-full"
          variant="outline"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
