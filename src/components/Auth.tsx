import axios from "axios";
import DialogReusable from "./DialogReusable";
import { loggedOutDialog } from "cms/Dialogs";
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
            <svg
              className="w-10 h-10 text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent inline-flex items-center justify-center rounded-[4px] shadow-md shadow-dark-foreground bg-light-foreground dark:bg-dark-foreground p-[9px] transition-colors "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"
              />
            </svg>
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
