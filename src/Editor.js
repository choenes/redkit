import React, { Component } from 'react';
import './App.css';
import SplitPane from 'react-split-pane';

import AceEditor from 'react-ace';
import 'brace/mode/java';
import 'brace/theme/github';

function onChange(newValue) {
  console.log('change',newValue);
}

class Editor extends Component {
  render() {
    return (
      <SplitPane split="vertical" minSize={0} defaultSize={225}>
        <div className="sideBar">
            <ul>
              <li>One</li>
              <li>Two</li>
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

export default Editor;
