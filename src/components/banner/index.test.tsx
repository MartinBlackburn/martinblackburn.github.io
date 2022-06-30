// libraries
import { render } from "@testing-library/react";

// component under test
import Banner from ".";

describe("Banner component", () => {
    describe("renders correctly", () => {
        test("with profile image", () => {
            const { asFragment } = render(
                <Banner
                    introText="// hello world"
                    titleText="I'm Martin Blackburn"
                    backgroundImage="/background.png"
                    profileImage="/profile.png"
                />
            );

            expect(asFragment()).toMatchSnapshot();
        });

        test("without profile image", () => {
            const { asFragment } = render(
                <Banner introText="// hello world" titleText="I'm Martin Blackburn" backgroundImage="/background.png" />
            );

            expect(asFragment()).toMatchSnapshot();
        });
    });
});
