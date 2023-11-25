"use client";
import { useParams } from "next/navigation";

export default function Room() {
  const param = useParams().id;

  return (
    <div className="p-10 border mx-auto bg-light-foreground/40 dark:bg-dark-foreground/40">
      {param}
    </div>
  );
}
