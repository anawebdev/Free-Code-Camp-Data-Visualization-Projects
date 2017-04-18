"use strict";

var initialText = getText();

var Markdown = React.createClass({
  displayName: "Markdown",

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        "Markdown Previewer"
      ),
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-md-5", rows: "20", cols: "20" },
          React.createElement(
            "textarea",
            { wrap: "hard" },
            initialText
          )
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(Markdown, null), document.getElementById('app'));

//Initial text
function getText() {
  return ['Heading', '=======', 'Sub-heading', '-----------', ' ### Another deeper heading', 'Paragraphs are separated', 'by a blank line.', 'Leave 2 spaces at the end of a line to do a', 'line break', 'Text attributes *italic*, **bold**', "monospace", '~~strikethrough~~.', 'Shopping list:', '* apples', '* oranges', '* pears', 'Numbered list:', '1. apples', '2. oranges', '3. pears', 'The rain---not the reign---in Spain.', '*[Ana Toma](https://www.freecodecamp.com/anawebdev)*'].join('\n');
}
