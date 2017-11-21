import React, { Component } from 'react';

export default class Editor extends Component {
  constructor() {
    super();

    this.state = {
      letters: [],
      editor: {}
    };

    this.onAlphaNumeric = this.onAlphaNumeric.bind(this);
    this.onAnyKey = this.onAnyKey.bind(this);
    this.save = this.save.bind(this);
  }

  componentDidMount() {
    this.setState({ editor: document.querySelector('#editor') })
  }

  render() {
    return(
      <div className="app-containter">
        <div id="app" 
          onKeyDown={this.onAnyKey}
          onKeyPress={this.onAlphaNumeric}>
          <input className="input"
            type="text"
            id="editor"
            autoFocus />
        </div>
        <div className="buttons">
          <button 
            className="btn btn-block"
            id="save"
            onClick={this.save}>REVEAL</button>
        </div>
        <div id="typed-content"></div>
      </div>
    );
  }

  onAlphaNumeric(evt) {
    if (evt.key !== 'Enter') {
      this.state.letters.push(evt.key);
    }
  }

  onAnyKey(evt) {
    const editor = this.state.editor;
    const letters = this.state.letters;
    const key = evt.key;
      if (key === ' ') {
        editor.value = '';
      }
      // Only allow backspace when text is visible in editor
      if (key === 'Backspace' && letters[letters.length - 1] !== ' ') {
        letters.pop();
      }

      if (key === 'Enter') this.save();
  }

  save() {
    const { editor, letters } = this.state;
    editor.value = '';
    editor.focus();
    const contentDiv = document.createElement('div');
    contentDiv.id = 'content';
    contentDiv.innerText = letters.join('');
    const typedContent = document.getElementById('typed-content');
    typedContent.appendChild(contentDiv);
    this.setState({letters: []})
  }
}
