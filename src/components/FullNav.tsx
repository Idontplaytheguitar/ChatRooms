import { navMenuItems } from "cms/NavMenu";
import NavMenu from "./NavMenu";
import Link from "next/link";

export default function FullNav() {
    return (
        <div className="p-5 sticky top-0 left-0 flex flex-row align-middle items-center w-full">
            <NavMenu
                className="mr-auto self-center place-self-center justify-self-center"
                items={navMenuItems}
            />
            <Link
                href="/"
                target="_self"
                className="ml-auto justify-self-start hover:text-light-accent dark:hover:text-dark-accent font-medium"
            >
                Chatrooms app
            </Link>
        </div>
    );
}
