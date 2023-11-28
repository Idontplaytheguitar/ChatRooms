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
import { generateZodObject } from "fndtn/app/formUtils/roomCreate";
import { ZodSchemaCreate } from "fndtn/interfaces/ZodSchemaCreate";

export function CreateForm(props: {
  formSchemaOptions: ZodSchemaCreate[];
  defaultValues: any;
  onSubmit: (values: z.ZodObjectDef) => void;
  items: formType[];
}) {
  const {
    formSchemaOptions,
    defaultValues,
    onSubmit,
    items,
  } = props;

  const formSchema = generateZodObject(
    formSchemaOptions
  );
  const form = useForm<
    z.infer<typeof formSchema>
  >({
    resolver: zodResolver(formSchema),
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
                return (
                  <Input
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
                          "Select an option" &&
                          formItem.placeholder
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
