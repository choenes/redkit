import React, { Component } from 'react';
import './App.css';
import './Editor.css';
import SplitPane from 'react-split-pane';
import Measure from 'react-measure';

// import AceEditor from 'react-ace';
// import 'brace/mode/java';
// import 'brace/theme/github';
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

class Editor extends Component {
  onChange = (editor, data, value) => {
    console.log('change', value)
  }

  render() {
    return (
        <CodeMirror
          value='<h1>I ♥ react-codemirror2</h1>'
          options={{
            mode: 'xml',
            theme: 'material',
            lineNumbers: true
          }}
          onChange={this.onChange}
          editorDidMount={editor => {
            this.codemirror = editor;
            this.codemirror.setSize("100%", "100%");
          }}
        />
    );
  }
}

export default Editor;
