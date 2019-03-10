import { observable, action } from 'mobx';
import spectralValidator from '../validation/spectralValidator';


export class SwaggerEditorState {

  @observable json: string

  @observable validatedJSON: object = {}

  @action
  validateJSON(newValue) {
    this.json = newValue;
    let object;
    try {
      object = JSON.parse(newValue);
    } catch(err) 
      { return; }
    
    this.validatedJSON = spectralValidator(object);
  }
}

export default new SwaggerEditorState;
