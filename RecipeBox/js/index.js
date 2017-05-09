"use strict";

//TO DO
//add markdown text
//add comments
//add detailed documentation on github
//dont forget to tidy it up
//add a maximum of characters for the input field title

var Header = React.createClass({
  displayName: "Header",

  render: function render() {
    return React.createElement(
      "div",
      { className: "container-fluid" },
      React.createElement(
        "div",
        { className: "row header" },
        React.createElement(
          "div",
          { className: "col-sm-12" },
          React.createElement(
            "h1",
            { id: "pageTitle" },
            "CoffeeBox"
          )
        ),
        React.createElement("div", { className: "col-sm-1" })
      )
    );
  }
});

var Footer = React.createClass({
  displayName: "Footer",

  render: function render() {
    return React.createElement(
      "footer",
      { className: "hidden-xs" },
      React.createElement(
        "div",
        { className: "container-fluid" },
        React.createElement(
          "div",
          { className: "row" },
          React.createElement("div", { className: "col-sm-2" }),
          React.createElement(
            "div",
            { className: "col-sm-2" },
            React.createElement(
              "a",
              { target: "_blank", href: "https://www.freecodecamp.com/anawebdev" },
              " ",
              React.createElement(
                "button",
                { className: "contact btn btn-block" },
                React.createElement("i", { className: "fa fa-free-code-camp", "aria-hidden": "true" })
              )
            )
          ),
          React.createElement(
            "div",
            { className: "col-sm-2" },
            React.createElement(
              "a",
              { target: "_blank", href: "https://github.com/anawebdev" },
              React.createElement(
                "button",
                { className: "contact btn btn-block" },
                React.createElement("i", { className: "fa fa-github", "aria-hidden": "true" })
              )
            )
          ),
          React.createElement(
            "div",
            { className: "col-sm-2" },
            React.createElement(
              "a",
              { target: "_blank", href: "https://twitter.com/anawebdev" },
              React.createElement(
                "button",
                { className: "contact btn btn-block" },
                React.createElement("i", { className: "fa fa-twitter", "aria-hidden": "true" })
              )
            )
          ),
          React.createElement(
            "div",
            { className: "col-sm-2" },
            React.createElement(
              "a",
              { target: "_blank", href: "http://codepen.io/feuerbird29/" },
              React.createElement(
                "button",
                { className: "contact btn btn-block" },
                React.createElement("i", { className: "fa fa-codepen", "aria-hidden": "true" })
              )
            )
          ),
          React.createElement("div", { className: "col-sm-2" })
        )
      )
    );
  }
});

var Accordion = React.createClass({
  displayName: "Accordion",

  getInitialState: function getInitialState() {
    if (localStorage.getItem("_feuerbird29_recipes") !== null && localStorage.getItem("_feuerbird29_recipes") !== "") {
      var recipes = JSON.parse(localStorage.getItem("_feuerbird29_recipes"));
      return this.state = {
        recipes: recipes
      };
    }
    var initial = [{
      title: "Hot Buttered Toffee Coffee",
      img: "http://cemaradinda.com/wp-content/uploads/IMG_3358.jpg",
      ingredients: "coffee mocha ice cream, hot coffee, butterscotch topping, almond liqueur, whipped topping, toffee pieces or 14.79 ml chopped chocolate-covered english toffee bar",
      instructions: "Spoon ice cream into a large coffee mug;pour coffee, butterscotch topping and almond liqueur over ice cream. Garnish with a dollop of whipped cream and sprinkle of toffee chips."
    }, {
      title: "Mint Espresso",
      img: "https://s-media-cache-ak0.pinimg.com/736x/c0/84/c1/c084c1c3c72d94242e404eb62f2ff848.jpg",
      ingredients: "espresso, milk, double cream, mint syrup and cocoa powder",
      instructions: "Brew an espresso in a cappuccino cup. Add 60ml of the Mint Milk Cream. Lightly dust with bitter cocoa powder. Preparation of Mint Milk Cream (serves 2): Pour the cold whole milk into a large bowl. Add the double cream, milk and mint syrup. Whip with an electric whisk to obtain a soft fluffy mixture. We recommend preparing this recipe with espresso coffee."
    }, {
      title: "Hazelnut Coffee",
      img: "https://68.media.tumblr.com/e1274b1abdb3710716305032b0fa7d60/tumblr_onm2dmpheq1s30ko5o1_500.jpg",
      ingredients: "Frangelico Hazelnut Liqueur, Fresh Brewed Coffee, Whipped Cream, Chocolate Shavings",
      instructions: "Add ingredients to a heat resistant mug in the order given. Top with whipped cream and chocolate shavings."
    }];
    localStorage.setItem("_feuerbird29_recipes", JSON.stringify(initial));
    return {
      recipes: initial
    };
  },
  handleEdit: function handleEdit(e) {
    return React.createElement(Modal, null);
  },
  handleDelete: function handleDelete(e) {
    var index = e.target.id;
    var object = JSON.parse(localStorage.getItem("_feuerbird29_recipes"));
    object.splice(index, 1);
    localStorage.setItem("_feuerbird29_recipes", JSON.stringify(object));
    this.state = {
      recipes: object
    };
    ReactDOM.render(React.createElement(RecipeBox, null), document.getElementById("app"));
  },
  handleSave: function handleSave(e) {
    var title = document.getElementById("title").value;
    var img = document.getElementById("img").value;
    var ingredients = document.getElementById("ingredients").value;
    var instructions = document.getElementById("instructions").value;
    if (title !== "" && ingredients !== "" && instructions !== "") {
      var object = [{
        title: title,
        img: img,
        ingredients: ingredients,
        instructions: instructions
      }];
      var storage = JSON.parse(localStorage.getItem("_feuerbird29_recipes"));
      object = storage.concat(object);
      localStorage.setItem("_feuerbird29_recipes", JSON.stringify(object));
      this.state = {
        recipes: object
      };
      ReactDOM.render(React.createElement(RecipeBox, null), document.getElementById("app"));
    }
  },
  handleEdit: function handleEdit(e) {
    var index = e.target.value;
    var titleCopy = document.getElementById("title" + index).value;
    var imgCopy = document.getElementById("img" + index).value;
    var ingredientsCopy = document.getElementById("ingredients" + index).value;
    var instructionsCopy = document.getElementById("instructions" + index).value;
    var valueObject = JSON.parse(localStorage.getItem("_feuerbird29_recipes"));
    if (valueObject[index].title !== titleCopy) {
      valueObject[index].title = titleCopy;
    }
    if (valueObject[index].img !== imgCopy) {
      valueObject[index].img = imgCopy;
    }
    if (valueObject[index].ingredients !== ingredientsCopy) {
      valueObject[index].ingredients = ingredientsCopy;
    }
    if (valueObject[index].instructions !== instructionsCopy) {
      valueObject[index].instructions = instructionsCopy;
    }
    localStorage.setItem("_feuerbird29_recipes", JSON.stringify(valueObject));
    this.state = {
      recipes: valueObject
    };
    ReactDOM.render(React.createElement(RecipeBox, null), document.getElementById("app"));
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: "contaner-fluid main" },
      React.createElement(
        "div",
        { className: "row" },
        React.createElement("div", { className: "col-sm-1" }),
        React.createElement(
          "div",
          { className: "panel-group col-sm-10" },
          React.createElement(
            "div",
            { className: "panel" },
            React.createElement(
              "div",
              { className: "panel-heading" },
              React.createElement(
                "a",
                { "data-toggle": "collapse", href: "#collapse2" },
                React.createElement(
                  "h3",
                  { className: "panel-title" },
                  "Add Recipe"
                )
              )
            ),
            React.createElement(
              "div",
              { id: "collapse2", className: "panel-collapse collapse" },
              React.createElement(
                "div",
                { className: "panel-body" },
                React.createElement(
                  "form",
                  null,
                  React.createElement("input", {
                    type: "text",
                    id: "title",
                    placeholder: "Title... (required)",
                    maxlength: "20"
                  }),
                  React.createElement("br", null),
                  React.createElement("input", {
                    type: "url",
                    id: "img",
                    placeholder: "Image URL..."
                  }),
                  React.createElement("br", null),
                  React.createElement("textarea", {
                    type: "text",
                    id: "ingredients",
                    placeholder: "Ingredients... (required)"
                  }),
                  React.createElement("br", null),
                  React.createElement("textarea", {
                    type: "text",
                    id: "instructions",
                    placeholder: "Instructions... (required)"
                  }),
                  React.createElement("br", null)
                )
              ),
              React.createElement(
                "div",
                { className: "panel-footer" },
                React.createElement(
                  "button",
                  { className: "btn taskbtn", onClick: this.handleSave },
                  "Save Recipe"
                )
              )
            )
          ),
          this.state.recipes.map(function (data, index) {
            return React.createElement(
              "div",
              { className: "panel" },
              React.createElement(
                "div",
                { className: "panel-heading" },
                React.createElement(
                  "a",
                  { "data-toggle": "collapse", href: "#" + (index + 1) },
                  React.createElement(
                    "h3",
                    { className: "panel-title" },
                    React.createElement("img", { src: data.img, className: "avatar" }),
                    data.title
                  )
                )
              ),
              React.createElement(
                "div",
                { id: index + 1, className: "panel-collapse collapse" },
                React.createElement(
                  "div",
                  { className: "panel-body" },
                  React.createElement("img", { src: data.img })
                ),
                React.createElement(
                  "div",
                  { className: "panel-body" },
                  React.createElement(
                    "h4",
                    null,
                    "Ingredients:"
                  ),
                  React.createElement(
                    "p",
                    null,
                    data.ingredients
                  )
                ),
                React.createElement(
                  "div",
                  { className: "panel-body" },
                  React.createElement(
                    "h4",
                    null,
                    "Instructions:"
                  ),
                  React.createElement(
                    "p",
                    null,
                    data.instructions
                  )
                ),
                React.createElement(
                  "div",
                  { className: "panel-footer" },
                  React.createElement(
                    "button",
                    {
                      className: "btn taskbtn",
                      value: index,
                      "data-toggle": "modal",
                      "data-target": '#myModal' + index,
                      id: "edit" + index
                    },
                    "Edit"
                  ),
                  React.createElement(
                    "button",
                    {
                      className: "btn taskbtn",
                      id: index,
                      onClick: this.handleDelete
                    },
                    "Delete"
                  )
                )
              ),
              React.createElement(
                "div",
                { id: 'myModal' + index, className: "modal fade", role: "dialog" },
                React.createElement(
                  "div",
                  { className: "modal-dialog" },
                  React.createElement(
                    "div",
                    { className: "modal-content" },
                    React.createElement(
                      "div",
                      { className: "modal-header" },
                      React.createElement(
                        "h4",
                        { className: "modal-title" },
                        "Edit Recipe"
                      )
                    ),
                    React.createElement(
                      "div",
                      { className: "modal-body" },
                      React.createElement(
                        "h4",
                        null,
                        "Title: "
                      ),
                      React.createElement("input", { defaultValue: data.title, id: "title" + index })
                    ),
                    React.createElement(
                      "div",
                      { className: "modal-body" },
                      React.createElement(
                        "h4",
                        null,
                        "Image URL:"
                      ),
                      React.createElement("input", { defaultValue: data.img, id: "img" + index })
                    ),
                    React.createElement(
                      "div",
                      { className: "modal-body" },
                      React.createElement(
                        "h4",
                        null,
                        "Ingredients:"
                      ),
                      React.createElement("textarea", { defaultValue: data.ingredients, id: "ingredients" + index })
                    ),
                    React.createElement(
                      "div",
                      { className: "modal-body" },
                      React.createElement(
                        "h4",
                        null,
                        "Instructions:"
                      ),
                      React.createElement("textarea", { defaultValue: data.instructions, id: "instructions" + index })
                    ),
                    React.createElement(
                      "div",
                      { className: "modal-footer" },
                      React.createElement(
                        "button",
                        { type: "button", className: "btn  taskbtn", onClick: this.handleEdit, value: index, "data-dismiss": "modal" },
                        "Save"
                      ),
                      React.createElement(
                        "button",
                        {
                          type: "button",
                          className: "btn  taskbtn",
                          "data-dismiss": "modal"
                        },
                        "Close"
                      )
                    )
                  )
                )
              )
            );
          }.bind(this))
        ),
        React.createElement("div", { className: "col-sm-1" })
      )
    );
  }
});

var RecipeBox = React.createClass({
  displayName: "RecipeBox",

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(Header, null),
      React.createElement(Accordion, null),
      React.createElement(Footer, null)
    );
  }
});

ReactDOM.render(React.createElement(RecipeBox, null), document.getElementById("app"));