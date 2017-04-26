"use strict";

var Recipe = React.createClass({
  displayName: "Recipe",

  render: function render() {
    return React.createElement(
      "div",
      null,
      props.children
    );
  }
});

var Layout = React.createClass({
  displayName: "Layout",

  render: function render() {
    return React.createElement(
      "div",
      { className: "container-fluid" },
      React.createElement(
        "div",
        { className: "row header" },
        React.createElement("div", { className: "col-sm-1" }),
        React.createElement(
          "div",
          { className: "col-sm-10" },
          React.createElement(
            "h1",
            null,
            "CoffeeBox"
          )
        ),
        React.createElement("div", { className: "col-sm-1" })
      ),
      React.createElement(
        "div",
        { className: "row container-fluid" },
        React.createElement("div", { className: "col-sm-1" }),
        React.createElement(
          "div",
          { className: "col-sm-10 box" },
          React.createElement("img", { className: "preview", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/275px-A_small_cup_of_coffee.JPG" }),
          React.createElement(
            "h4",
            null,
            "Vienese Coffee"
          )
        ),
        React.createElement("div", { className: "col-sm-1" })
      ),
      React.createElement(
        "div",
        { className: "row container-fluid" },
        React.createElement("div", { className: "col-sm-1" }),
        React.createElement(
          "div",
          { className: "col-sm-10 box" },
          React.createElement("img", { className: "preview", src: "http://sawadacoffee.com/wp-content/uploads/Sawada-Coffee-10DEC2015-003.jpg" }),
          React.createElement(
            "h4",
            null,
            "Gingerbread Latte "
          )
        ),
        React.createElement("div", { className: "col-sm-1" })
      ),
      React.createElement(
        "div",
        { className: "row container-fluid" },
        React.createElement("div", { className: "col-sm-1" }),
        React.createElement(
          "div",
          { className: "col-sm-10 box" },
          React.createElement("img", { className: "preview", src: "https://livinghealthywithchocolate.com/wp-content/uploads/2015/04/Healthy-Paleo-Starbucks-Mocha-Frappuccino-Recipe-dairyfree-glutenfree-sugarfree1.jpg" }),
          React.createElement(
            "h4",
            null,
            "Frappuccino Mocha"
          )
        ),
        React.createElement("div", { className: "col-sm-1" })
      )
    );
  }
});

var App = React.createClass({
  displayName: "App",

  render: function render() {
    return React.createElement(Layout, null);
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));