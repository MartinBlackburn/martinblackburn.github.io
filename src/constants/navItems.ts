export enum NavItemType {
    page = "page",
    subNav = "subNav",
}

export interface NavItem {
    name: string;
    componentPath?: string;
    type: NavItemType;
    subNav?: NavItem[];
}

export const NavItems: NavItem[] = [
    {
        name: "Home",
        componentPath: "./home",
        type: NavItemType.page,
    },
    {
        name: "Résumé",
        componentPath: "./resume",
        type: NavItemType.page,
    },
    {
        name: "Projects",
        type: NavItemType.subNav,
        subNav: [
            // {
            //     name: "Kitchen Renovation",
            //     componentPath: "/projects/kitchen-renovation",
            //     type: NavItemType.page,
            // },
            {
                name: "Shuffleboard",
                componentPath: "./projects/shuffleboard",
                type: NavItemType.page,
            },
        ],
    },
];
