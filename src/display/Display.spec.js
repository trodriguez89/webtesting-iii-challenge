// Test away!
import React from "react";
import { render } from "@testing-library/react";
import Display from "./Display";

test("Display matches snapshot", () => {
    const tree = render (<Display />)
    expect(tree.baseElement).toMatchSnapshot();
});

test("display green when unlocked or open", () => {
    const display = render(<Display closed={false} locked={false}/>);
    const lockStatus = display.getByText(/unlocked/i);
    const openStatus = display.getByText(/open/i);

    expect(lockStatus.className).toBe("led green-led");
    expect(openStatus.className).toBe("led green-led");
});

test("display red when locked or closed", () => {
    const display2 = render(<Display closed={true} locked={true}/>)
    const lockStatus2 = display2.getByText(/locked/i);
    const openStatus2 = display2.getByText(/close/i);

    expect(lockStatus2.className).toBe("led red-led");
    expect(openStatus2.className).toBe("led red-led");
});