import NavMenu from "fndtn/components/NavMenu";
import { navMenuItems } from "cms/NavMenu";
import FullNav from "fndtn/components/FullNav";

export default function NotFound() {
    return (
        <div >
            <h1 className="mx-auto mt-32 my-5 self-center text-4xl font-extrabold tracking-tight lg:text-5xl">
                404 Error
            </h1>
            <h2 className="border-b pb-2 text-3xl font-semibold tracking-tight">
                Page not found
            </h2>
        </div>
    );
}
