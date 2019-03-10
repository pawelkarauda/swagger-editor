import * as React from "react";
import { shallow } from "enzyme";
const enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");

enzyme.configure({ adapter: new Adapter() });

import App from "../components/App";
import CodeEditor from "../components/CodeEditor";
import TreeView from "../components/TreeView";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

it("Renders code editor", () => {
  expect(wrapper.find(CodeEditor).length).toEqual(1);
})

it("Renders tree view", () => {
  expect(wrapper.find(TreeView).length).toEqual(1);
})