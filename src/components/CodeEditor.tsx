import * as React from 'react';

import AceEditor from 'react-ace';
import 'brace/mode/json';
import 'brace/theme/monokai'
import 'brace/theme/terminal'

import { observer } from 'mobx-react';
import SwaggerEditorState from '../store/swagState';

const file = require("../../spec/petstore.oas2.json");

@observer
class CodeEditor extends React.Component  {
  componentDidMount(){
    this.runValidation(JSON.stringify(file, null, 4))
  }

  runValidation(json){
    SwaggerEditorState.validateJSON(json);
  }

  render() {
    return (
      <div>
        <AceEditor
          mode="json"
          theme="terminal"
          name="UNIQUE_ID_OF_DIV"
          value={SwaggerEditorState.json}
          editorProps={{$blockScrolling: true}}
          wrapEnabled={true}
          onChange={e => this.runValidation(e)}
          debounceChangePeriod={300}
          fontSize={15}
        />
      </div>
    )
  }
}

export default CodeEditor