// Test away!
import React from "react";
import { render } from "@testing-library/react";
import Display from "./Display";

test("Display matches snapshot", () => {
    const tree = render (<Display />)
    expect(tree.baseElement).toMatchSnapshot();
}) 