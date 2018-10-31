import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SplitPane from 'react-split-pane';

import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/java';
import 'brace/theme/github';

function onChange(newValue) {
  console.log('change',newValue);
}

class App extends Component {
  render() {
    return (
      <SplitPane split="vertical" minSize={50} defaultSize={100}>
        <div className="sideBar">
            <ul>
              <li><i class="material-icons">face</i> One</li>
              <li>Two</li>
            </ul>
        </div>

        <AceEditor
          mode="java"
          theme="github"
          onChange={onChange}
          name="editor"
          editorProps={{$blockScrolling: true}}
        />
      </SplitPane>
    );
  }
}

export default App;
