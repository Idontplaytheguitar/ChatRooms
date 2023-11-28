"use client";

import { CreateForm } from "fndtn/components/FormReusable";
import { onSubmit } from "../formUtils/roomCreate";
import { formRoom } from "cms/Forms";

export default function CreateRoom() {
  return (
    <div className="bg-light-complimentary/50 dark:bg-dark-complimentary/50 p-10 rounded-md">
      <CreateForm
        onSubmit={onSubmit}
        items={formRoom}
      />
    </div>
  );
}
