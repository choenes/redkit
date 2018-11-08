import React, { Component } from 'react';
import './App.css';
import SplitPane from 'react-split-pane';
import Measure from 'react-measure'
import AceEditor from 'react-ace';
import 'brace/mode/java';
import 'brace/theme/github';

class Editor extends Component {
  onChange = (newValue) => {
    console.log('change',newValue)
  }

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
               onChange={this.onChange}
               name="editor"
               editorProps={{$blockScrolling: true}}
             />
         }

      </SplitPane>
    );
  }
}

export default Editor;
