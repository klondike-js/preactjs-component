/* eslint-env node, jest */

import { h } from "preact";
import render from "preact-render-to-string";
import CustomComponent from "./index";


describe("CustomComponent Snapshot", () => {
  it("should render with content", () => {
    const tree = render(<CustomComponent />);
    expect(tree).toMatchSnapshot();
  });
});