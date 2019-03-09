import * as React from 'react';

import AceEditor from 'react-ace';
import 'brace/mode/json';
import 'brace/theme/monokai'

import { observer } from 'mobx-react';
import { swagState } from '../store/swagState';

@observer
class CodeEditor extends React.Component  {
  componentDidMount(){
    swagState.validateJSON(swagState.json);
  }

  render() {
    return (
      <div>
        <AceEditor
          mode="json"
          theme="monokai"
          name="UNIQUE_ID_OF_DIV"
          value={swagState.json}
          editorProps={{$blockScrolling: true}}
          wrapEnabled={true}
          onChange={e => swagState.validateJSON(e)}
          debounceChangePeriod={300}
          fontSize={15}
        />
      </div>
    )
  }
}

export default CodeEditor