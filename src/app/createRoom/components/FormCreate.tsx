"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message:
        "Room name must be at least 2 characters.",
    })
    .max(25, {
      message:
        "Room name must be under 25 characters",
    }),
  chatPrivate: z.boolean(),
  listed: z.boolean(),
  duration: z.enum([
    "1 hour",
    "2 hours",
    "5 hours",
    "1 day",
    "7 days",
    "30 days",
  ]),
});

export function CreateRoomForm() {
  // 1. Define your form.
  const form = useForm<
    z.infer<typeof formSchema>
  >({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      chatPrivate: false,
      listed: true,
      duration: "1 day",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(
    values: z.infer<typeof formSchema>
  ) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  placeholder="shadcn"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
