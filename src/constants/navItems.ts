export interface NavItem {
    name: string;
    componentPath: string;
}

export const NavItems: { [key: string]: NavItem } = {
    HOME: {
        name: "Home",
        componentPath: "./home",
    },
    EMPLOYMENT: {
        name: "Employment history",
        componentPath: "./about/employment",
    },
    EDUCATION: {
        name: "Education",
        componentPath: "./about/education",
    },
    HOBBIES: {
        name: "Hobbies",
        componentPath: "./about/hobbies",
    },
    SHUFFLEBOARD: {
        name: "Shuffleboard table",
        componentPath: "./projects/shuffleboard",
    },
    TIKIBAR: {
        name: "Tiki Bar",
        componentPath: "./projects/tikiBar",
    },
};
