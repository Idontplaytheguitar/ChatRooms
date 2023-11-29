import axios from "axios";
import { headers } from "next/headers";
import DialogReusable from "./DialogReusable";
import { loggedOutDialog } from "cms/Dialogs";
import { FormReusable } from "./FormReusable";
import { formRegister } from "cms/Forms";
import { onSubmitRegister } from "fndtn/app/formUtils/userForm";
import RegisterForm from "./RegisterForm";
import TabsReusable from "./TabsReusable";
import { TabsLoginRegister } from "cms/Tabs";

export default async function Auth() {
  let loggedIn = false;
  try {
    loggedIn = (
      await axios.get(
        "http://localhost:3001/profile"
      )
    ).data;
  } catch (e) {
    console.log(e);
  }
  console.log(loggedIn);
  return (
    <div>
      {loggedIn ? (
        "LOGGED IN"
      ) : (
        <DialogReusable
          contentTitle={
            loggedOutDialog.contentTitle
          }
          trigger={
           
          }
          contentDescription={
            loggedOutDialog.contentDescription
          }
        >
          <TabsReusable
            items={TabsLoginRegister}
          />
        </DialogReusable>
      )}
    </div>
  );
}
