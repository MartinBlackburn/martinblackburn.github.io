export enum NavItemType {
    link = "link",
    iframe = "iframe",
}

export interface NavItem {
    name: string;
    source: string;
    type: NavItemType;
}

export const NavItems: NavItem[] = [
    {
        name: "Home",
        source: "/",
        type: NavItemType.link,
    },
    {
        name: "Résumé",
        source: "https://martin.blackburn.dev/cv",
        type: NavItemType.iframe,
    },
];
