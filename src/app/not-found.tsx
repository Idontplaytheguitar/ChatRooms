import NavMenu from "fndtn/components/NavMenu";
import { navMenuItems } from "cms/NavMenu";
import FullNav from "fndtn/components/FullNav";

export default function NotFound() {
    return (
        <main className="relative flex min-h-screen flex-col items-center p-5 bg-light-background dark:bg-dark-background scroll-smooth">
            <FullNav/>
            <h1 className="mx-auto mt-32 my-5 self-center text-4xl font-extrabold tracking-tight lg:text-5xl">
                404 Error
            </h1>
            <h2 className="border-b pb-2 text-3xl font-semibold tracking-tight">
                Page not found
            </h2>
        </main>
    );
}
