import DialogReusable from "./DialogReusable";
import { loggedOutDialog } from "cms/Dialogs";
import TabsReusable from "./TabsReusable";
import { TabsLoginRegister } from "cms/Tabs";
import {
  Avatar,
  AvatarFallback,
} from "./ui/avatar";
import LogOut from "./LogOut";
import { profileGet } from "fndtn/utils/Auth";

export default async function Auth() {
  const { loggedIn, data } = await profileGet();

  return (
    <div>
      {loggedIn ? (
        <DialogReusable
          contentTitle={`Logged in as ${data.username}`}
          contentDescription="This are your user settings"
          trigger={
            <Avatar>
              <AvatarFallback className="bg-light-foreground dark:bg-dark-foreground hover:cursor-pointer">
                {(
                  data.username[0] as string
                ).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          }
        >
          <LogOut />
        </DialogReusable>
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
