"use client";

import * as React from "react";
import Link from "next/link";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "fndtn/components/ui/navigation-menu";
import { cn } from "fndtn/lib/utils";
import { INavMenuItem } from "fndtn/interfaces/INavMenuItem";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function NavigationMenuDemo(props: { items: INavMenuItem[] }) {
    const { items } = props;
    return (
        <NavigationMenu >
            {items.map((item, keyItem) => {
                return (
                    <NavigationMenuList key={item.trigger + keyItem}>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>
                                {item.trigger}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[600px] ">
                                    {item.content.map(
                                        (contentItem, contentItemKey) => (
                                            <ListItem
                                                key={
                                                    contentItem.link.display +
                                                    contentItemKey
                                                }
                                                title={contentItem.link.display}
                                                href={contentItem.link.href}
                                                target={contentItem.link.target}
                                            >
                                                {contentItem.description}
                                            </ListItem>
                                        )
                                    )}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/help" legacyBehavior passHref>
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                >
                                    Help
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="border-l border-dotted">
                            <ThemeSwitcher/>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                );
            })}
        </NavigationMenu>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent dark:hover:text-dark-accent hover:text-light-accent focus:bg-accent focus:text-accent-foreground bg-opacity-75",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
