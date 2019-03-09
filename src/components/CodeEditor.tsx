import * as React from 'react';

import AceEditor from 'react-ace';
import 'brace/mode/json';
import 'brace/theme/monokai'

class CodeEditor extends React.Component  {


  render() {
    return (
      <div>
        <AceEditor
          mode="json"
          theme="monokai"
          name="UNIQUE_ID_OF_DIV"
          value={'magic code here'}
          editorProps={{$blockScrolling: true}}
          wrapEnabled={true}
          debounceChangePeriod={300}
          fontSize={15}
        />
      </div>
    )
  }
}

export default CodeEditor