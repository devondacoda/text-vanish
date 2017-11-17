import React, { Component } from 'react';
import ClassicEditor from '../../node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor';

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
    this.setState({ editor: ClassicEditor.create(document.querySelector('#editor')) })
  }

  render() {
    return(
      <div className="app-containter">
        <div id="app" 
          onKeyDown={this.onAnyKey}
          onKeyPress={this.onAlphaNumeric}>
          <input type="text" id="editor"></input>
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
    this.state.letters.push(evt.key);
  }

  onAnyKey(evt) {
    const editor = this.state.editor;
    const letters = this.state.letters;
    const key = evt.key;
    editor.then((editor) => {
      if (key === ' ') {
        editor.setData('<p></p>');
      }
      // Only allow backspace when text is visible in editor
      if (key === 'Backspace' && letters[letters.length - 1] !== ' ') {
        letters.pop();
      }
      if (key === 'Enter') {
        editor.setData('<p></p>');
        letters.push('\n');
        this.save(); // ALTERNATE FEATURE: display text so far when enter is pressed instead of only when save button is clicked
      }
    })
    .catch(console.log);
  }

  save() {
    const editor = this.state.editor;
    let letters = this.state.letters;
    editor.then((editor) => {
      editor.setData('<p></p>');
      const contentDiv = document.createElement('div');
      contentDiv.id = 'content';
      contentDiv.innerText = letters.join('');
      const typedContent = document.getElementById('typed-content');
      typedContent.appendChild(contentDiv);
      this.setState({letters: []})
    })
    .catch(console.log);
  }
}
