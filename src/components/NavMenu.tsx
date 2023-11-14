"use client";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "fndtn/components/ui/navigation-menu";
import { INavMenuItem } from "fndtn/interfaces/INavMenuItem";

export default function NavMenu(props: {
    className?: string;
    items: INavMenuItem[];
}) {
    const { className, items } = props;
    return (
        <NavigationMenu className={`${className ?? ""}`}>
            <NavigationMenuList>
                {items?.length ? (
                    items?.map((i, k) => {
                        return (
                            <NavigationMenuItem key={i.trigger + k}>
                                <NavigationMenuTrigger>
                                    {i.trigger}
                                </NavigationMenuTrigger>
                                {i.content.map((content, keyContent) => {
                                    return (
                                        <NavigationMenuContent
                                            key={content.display + keyContent}
                                        >
                                            <NavigationMenuLink
                                                href={content.href}
                                                target={content.target}
                                            >
                                                {content.display}
                                            </NavigationMenuLink>
                                        </NavigationMenuContent>
                                    );
                                })}
                            </NavigationMenuItem>
                        );
                    })
                ) : (
                    <div>no items found on the nav menu</div>
                )}
            </NavigationMenuList>
        </NavigationMenu>
    );
}
