"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "fndtn/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<
    typeof SwitchPrimitives.Root
  >
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer flex flex-row h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-stone-900 data-[state=unchecked]:bg-stone-200 dark:focus-visible:ring-stone-300 dark:focus-visible:ring-offset-stone-950 dark:data-[state=checked]:bg-stone-50 dark:data-[state=unchecked]:bg-stone-800 text-center",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 bg-light-accent/60 data-[state=checked]:bg-light-accent dark:bg-dark-accent/60 dark:data-[state=checked]:bg-dark-accent "
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName =
  SwitchPrimitives.Root.displayName;

export { Switch };
