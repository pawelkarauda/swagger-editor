import * as React from 'react';
import CodeEditor from './CodeEditor' 
import TreeView from './TreeView'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import "../assets/App.css";


class App extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className="row">
          <div className="col-md-3 tree">        
            <TreeView />
          </div>
          <div className="col-md-9 editor">
            <CodeEditor />
          </div>
        </div>
      </div>
    );
  }
}

export default App