import { observable, action } from 'mobx';
const file = require("../../spec/petstore.oas2.json");


class SwaggerEditorState {

  @observable json: string = JSON.stringify(file, null, 4)

  @observable validatedJSON: object

  @action
  validateJSON(newValue) {
    console.log(newValue);    
  }
}

export const swagState = new SwaggerEditorState();
