import NavMenu from "fndtn/components/NavMenu";
import { navMenuItems } from "cms/NavMenu";

export default function Home() {
    return (
        <main className="relative flex min-h-screen flex-col items-center p-5">
            <nav className="p-5 sticky top-0 left-0">
                <NavMenu items={navMenuItems} className="mx-auto" />
            </nav>
            <div className="h-screen"></div>
        </main>
    );
}
