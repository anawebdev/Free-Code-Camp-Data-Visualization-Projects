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
          React.createElement("img", {
            className: "preview",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/275px-A_small_cup_of_coffee.JPG"
          }),
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
          React.createElement("img", {
            className: "preview",
            src: "http://sawadacoffee.com/wp-content/uploads/Sawada-Coffee-10DEC2015-003.jpg"
          }),
          React.createElement(
            "h4",
            null,
            "Gingerbread Latte"
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
          React.createElement("img", {
            className: "preview",
            src: "https://livinghealthywithchocolate.com/wp-content/uploads/2015/04/Healthy-Paleo-Starbucks-Mocha-Frappuccino-Recipe-dairyfree-glutenfree-sugarfree1.jpg"
          }),
          React.createElement(
            "h4",
            null,
            "Frappuccino Mocha"
          )
        ),
        React.createElement("div", { className: "col-sm-1" })
      ),
      React.createElement(AddRecipe, null)
    );
  }
});

var AddRecipe = React.createClass({
  displayName: "AddRecipe",

  getInitialState: function getInitialState() {
    return {
      title: "",
      image: "",
      ingredients: [],
      instructions: []
    };
  },
  getNewRecipe: function getNewRecipe() {
    return React.createElement(Modal, null);
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: "row container-fluid" },
      React.createElement("div", { className: "col-sm-1" }),
      React.createElement(
        "div",
        { className: "col-sm-10 box", onClick: this.addInfo },
        React.createElement(
          "div",
          { className: "row" },
          React.createElement("i", { className: "fa fa-plus-circle icon", "aria-hidden": "true" }),
          React.createElement(
            "h4",
            { id: "last" },
            "Add Recipe"
          )
        )
      ),
      React.createElement("div", { className: "col-sm-1" })
    );
  }
});

var Modal = React.createClass({
  displayName: "Modal",

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { id: "addWindow" },
        React.createElement(
          "form",
          { id: "form1" },
          React.createElement("input", { type: "text", id: "title", name: "title", placeholder: "Title..." }),
          React.createElement("br", null),
          React.createElement("input", { type: "text", id: "image", name: "image", placeholder: "Type image URL..." }),
          React.createElement("br", null),
          React.createElement("textarea", { type: "text", id: "ingredients", name: "ingredients", placeholder: "Ingredient list..." }),
          React.createElement("br", null),
          React.createElement("textarea", { type: "text", id: "instructions", name: "instructions", placeholder: "Write instructions..." })
        ),
        React.createElement(
          "div",
          { id: "buttonGroup" },
          React.createElement(
            "button",
            { className: "btn btn-primary btn-block", id: "btn1", type: "submit", value: "Submit", form: "form1" },
            "Add"
          ),
          React.createElement(
            "button",
            { className: "btn btn-success btn-block", id: "btn2", type: "submit", value: "Edit", form: "form1" },
            "Edit"
          ),
          React.createElement(
            "button",
            { className: "btn btn-danger btn-block", id: "btn3", type: "close", value: "Close", form: "form1" },
            "Close"
          )
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(Layout, null), document.getElementById("app"));
//ReactDOM.render(<Modal />, document.getElementById("app"));