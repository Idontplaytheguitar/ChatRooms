"use client";

import { FormReusable } from "fndtn/components/FormReusable";
import { onSubmitCreateRoom } from "../formUtils/roomCreate";
import { formRoom } from "cms/Forms";
import { profileGet } from "fndtn/utils/Auth";

export default function CreateRoom() {
  const { loggedIn } = profileGet()
  return (
    <div className="bg-light-complimentary/50 dark:bg-dark-complimentary/50 p-10 rounded-md">
      {
        loggedIn ?
        <div>Clearly not logged in bro</div>
        :
        <FormReusable
        onSubmit={onSubmitCreateRoom}
        items={formRoom}
        />
      }
    </div>
  );
}
