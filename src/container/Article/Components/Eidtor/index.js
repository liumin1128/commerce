import React, { useState, useRef, useEffect } from 'react';
// import ReactDOM from 'react-dom';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Editor, EditorState, RichUtils, convertFromRaw } from 'draft-js';
// import Affix from '@/components/Affix';
import { state2json, state2html } from './utils';
import './index.less';

function MyEditor({ placeholder = '请输入...', ...props }) {
  const [ editorState, setEditorState ] = useState(
    EditorState.createEmpty(),
  );

  const editor = useRef();

  function focusEditor() {
    editor.current.focus();
  }

  useEffect(() => {
    focusEditor();
  }, []);

  function onChange(state) {
    setEditorState(state);
  }

  function handleKeyCommand(command, state) {
    const newState = RichUtils.handleKeyCommand(state, command);
    if (newState) {
      onChange(newState);
      return true;
    }
    return false;
  }

  // 设置className，placeholder样式
  let className = 'RichEditor-editor draft-view-content';
  const contentState = editorState.getCurrentContent();
  if (!contentState.hasText()) {
    if (contentState.getBlockMap().first().getType() !== 'unstyled') {
      className += ' RichEditor-hidePlaceholder';
    }
  }

  return (
    <Box onClick={focusEditor} bgcolor="#ddd" p={4}>


      <div className="RichEditor-root">
        <div className={className}>
          <Editor
            placeholder={placeholder}
            handleKeyCommand={handleKeyCommand}
            ref={editor}
            editorState={editorState}
            onChange={onChange}
          />
        </div>
      </div>

      <Button
        onClick={() => {
          console.log(state2json(editorState));
        }}
      >
        state2json
      </Button>
      <Button
        onClick={() => {
          console.log(state2html(editorState));
        }}
      >
        state2html
      </Button>
    </Box>
  );
}

export default MyEditor;
