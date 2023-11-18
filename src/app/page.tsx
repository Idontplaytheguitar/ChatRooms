import NavMenu from "fndtn/components/NavMenu";
import { navMenuItems } from "cms/NavMenu";
import FullNav from "fndtn/components/FullNav";

export default function Home() {
    return (
        <main className="relative flex min-h-screen flex-col items-center p-5 bg-light-background dark:bg-dark-background scroll-smooth">
            <FullNav />
        </main>
    );
}
