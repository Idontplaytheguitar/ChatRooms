import { INavMenuItem } from "fndtn/interfaces/INavMenuItem";

export const navMenuItems: INavMenuItem[] = [
    {
        content: [
            {
                link: { display: "See rooms", href: "/rooms", target: "_self" },
                description: "See all the rooms you can join",
            },
            {
                link: {
                    display: "Create new room",
                    href: "/CreateRoom",
                    target: "_self",
                },
                description: "Create a room others can join"
            },
            {
                link: {
                    display: "Join room with code",
                    href: "/JoinCode",
                    target: "_self",
                },
                description:"Join a room with an invite code given by someone else"
            },
        ],
        trigger: "Rooms",
    },
];
