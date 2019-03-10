import * as React from "react";
import { shallow, mount } from "enzyme";
import { observable } from 'mobx';
const enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");

enzyme.configure({ adapter: new Adapter() });

import { SwaggerEditorState } from "../store/swagState";
const initialJSON = require('./initialJSON.json');


describe("Store", () => {

  const store = new SwaggerEditorState();
  it("in the begining is empty", () => {
    expect(store.validatedJSON).toEqual({})
  });
  it("after validation is not empty", () => {
    store.validateJSON(JSON.stringify(initialJSON));
    expect(store.validatedJSON).not.toEqual({});
  });
    
});