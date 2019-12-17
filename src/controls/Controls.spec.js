import React from "react";
import { render } from "@testing-library/react";

import Controls from "./Controls";

// Test away!

test("Controls matches snapshot", () => {
    const tree = render(<Controls />)
    expect(tree.baseElement).toMatchSnapshot();
})

test("toggle closed", () => {
    const { getByTestId }= render(<Controls />)
    getByTestId("locked")
})

test("toggle closed", () => {
    const { getByTestId } = render(<Controls />)
    getByTestId("closed")
})