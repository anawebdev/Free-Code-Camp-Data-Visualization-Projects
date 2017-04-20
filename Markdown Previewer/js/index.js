'use strict';

var markedHtml;
var initialText = getText();

//Initial text
function getText() {
  return ['Heading', '=======', 'Sub-heading', '-----------', ' ### Another deeper heading', 'Paragraphs are separated', 'by a blank line.', 'Leave 2 spaces at the end of a line to do a', 'line break', 'Text attributes *italic*, **bold**', 'monospace', '~~strikethrough~~.', 'Shopping list:', '* apples', '* oranges', '* pears', 'Numbered list:', '1. apples', '2. oranges', '3. pears', 'The rain---not the reign---in Spain.', '*[Ana Toma](https://www.freecodecamp.com/anawebdev)*'].join('\n');
}

var Markdown = React.createClass({
  displayName: 'Markdown',

  getInitialState: function getInitialState() {
    return {
      userInput: initialText
    };
  },
  handleUserInput: function handleUserInput(e) {
    this.setState({
      userInput: e.target.value

    });
  },
  render: function render() {
    markedHtml = marked(this.state.userInput);
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        { id: 'title' },
        'Markdown Previewer'
      ),
      React.createElement(
        'div',
        { className: 'row' },
        React.createElement('div', { className: 'col-md-1' }),
        React.createElement(
          'div',
          { className: 'col-md-5' },
          React.createElement('textarea', {
            wrap: 'hard',
            type: 'text',
            onChange: this.handleUserInput,
            value: this.state.userInput })
        ),
        React.createElement(
          'div',
          { className: 'col-md-5' },
          React.createElement('div', {
            dangerouslySetInnerHTML: { __html: markedHtml },
            id: 'result' })
        ),
        React.createElement('div', { className: 'col-md-1' })
      )
    );
  }
});

ReactDOM.render(React.createElement(Markdown, null), document.getElementById('app'));