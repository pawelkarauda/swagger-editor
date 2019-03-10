import * as React from 'react';

import { observer } from 'mobx-react';
import SwaggerEditorState from '../store/swagState';

@observer
class TreeView extends React.Component  {

  checkForErrors(item, warn){
    let bool = false;
    if(Array.isArray(item)){
      item[item.length - 1] == warn ? bool = true : bool = false;
      bool == true ? item.pop() : false;
    } else {
      item.hasOwnProperty(warn) ? bool = true : bool = false;
    }
    return bool;
  }

  renderTreeView(object){

    if(object === null && object === undefined) return;
    
    let text = (Object.keys(object).map((key) => {

      let obj = object[key];      

      return (typeof obj === 'object' ? 

        (this.checkForErrors(obj, 'warn') && this.checkForErrors(obj, 'error')  ?
          '<li> <div class="warning-row"> <span>' + key + '</span> <span><span class="warn"></span><span class="error"></span></span> </div>' : 

        this.checkForErrors(obj, 'warn') && !this.checkForErrors(obj, 'error') ? 
          '<li> <div class="warning-row"> <span>' + key + '</span> <span class="warn"></span> </div>' : 

        !this.checkForErrors(obj, 'warn') && this.checkForErrors(obj, 'error') ? 
          '<li> <div class="warning-row"> <span>' + key + '</span> <span class="error"></span> </div>' : 
          
        '<li>' + key ) +
              
        '<ul>' + this.renderTreeView(obj) + '</ul> </li>' :

        (key === 'warn' ? '' : key === 'error' ? '' : '<li>' + key + '</li>')
        
      )
    }));
     
    return text.toString().replace(/\,/g,'');
  }

  render() {
    return (
      <ul dangerouslySetInnerHTML=
        {{__html: this.renderTreeView(SwaggerEditorState.validatedJSON)}}>
      </ul>
    )
  }

}

export default TreeView