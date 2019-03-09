import { observable, action } from 'mobx';
import spectralValidator from '../validation/spectralValidator';
const file = require("../../spec/petstore.oas2.json");


class SwaggerEditorState {

  @observable json: string = JSON.stringify(file, null, 4)

  @observable validatedJSON: object = file

  @action
  validateJSON(newValue) {
    let object;
    try {
      object = JSON.parse(newValue);
    } catch(err) 
      { return; }
    
    this.validatedJSON = spectralValidator(object);
  }
}

export const swagState = new SwaggerEditorState();
