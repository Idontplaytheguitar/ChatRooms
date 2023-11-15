import NavMenu from "fndtn/components/NavMenu";
import { navMenuItems } from "cms/NavMenu";
import { ThemeSwitcher } from "fndtn/components/ThemeSwitcher";
 

export default function Home() {
    
    return (
        <main className="relative flex min-h-screen flex-col items-center p-5">
            <nav className="p-5 sticky top-0 left-0">
                <NavMenu items={navMenuItems} />
            </nav>
            <div className="h-screen">
                <ThemeSwitcher/>
            </div>
        </main>
    );
}
