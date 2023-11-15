"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export function ThemeSwitcher() {
    const { setTheme, theme } = useTheme();
    const toggleTheme = () =>
        theme === "light" ? setTheme("dark") : setTheme("light");
    return (
        <Button
            onClick={() => {
                toggleTheme();
            }}
        >
            Switch theme
        </Button>
    );
}
