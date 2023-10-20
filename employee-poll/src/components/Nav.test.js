import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../store";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import Nav from "./Nav";
import {setAuthenticatedUser} from "../actions/authenticateUser";

describe("Nav", () => {
    it("should render the component", () => {
        store.dispatch(setAuthenticatedUser({id: "tylermcginnis", password: ""}));

        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Nav/>
                </BrowserRouter>
            </Provider>
        );
        expect(component).toBeDefined();
        expect(component).toMatchSnapshot();
    });

    it("should display username of logged in user", () => {
        store.dispatch(setAuthenticatedUser({id: "tylermcginnis", password: ""}));

        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Nav/>
                </BrowserRouter>
            </Provider>
        );

        const userAvatarElement = component.getByTestId("user-avatar");
        expect(userAvatarElement).toBeInTheDocument();
    });
});
