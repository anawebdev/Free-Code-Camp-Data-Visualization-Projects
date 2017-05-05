"use strict";

var Header = React.createClass({
  displayName: "Header",

  render: function render() {
    return React.createElement(
      "div",
      { className: "container-fluid" },
      React.createElement(
        "div",
        { className: "row header" },
        React.createElement("div", { className: "col-sm-1" }),
        React.createElement("hr", null),
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
      )
    );
  }
});

var Footer = React.createClass({
  displayName: "Footer",

  render: function render() {
    return React.createElement(
      "footer",
      null,
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
              "button",
              { className: "contact btn btn-block" },
              React.createElement("i", { className: "fa fa-free-code-camp", "aria-hidden": "true" })
            )
          ),
          React.createElement(
            "div",
            { className: "col-sm-2" },
            React.createElement(
              "button",
              { className: "contact btn btn-block" },
              React.createElement("i", { className: "fa fa-github", "aria-hidden": "true" })
            )
          ),
          React.createElement(
            "div",
            { className: "col-sm-2" },
            React.createElement(
              "button",
              { className: "contact btn btn-block" },
              React.createElement("i", { className: "fa fa-twitter", "aria-hidden": "true" })
            )
          ),
          React.createElement(
            "div",
            { className: "col-sm-2" },
            React.createElement(
              "button",
              { className: "contact btn btn-block" },
              React.createElement("i", { className: "fa fa-linkedin-square", "aria-hidden": "true" })
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

  propTypes: {
    title: React.PropTypes.string.isRequired,
    img: React.PropTypes.string.isRequired,
    ingredients: React.PropTypes.string.isRequired,
    instructions: React.PropTypes.string.isRequired
  },
  getInitialState: function getInitialState() {
    if (localStorage.getItem("_feuerbird29_recipes") !== null && localStorage.getItem("_feuerbird29_recipes") !== "") {
      return this.state = {
        recipes: JSON.parse(localStorage.getItem("_feuerbird29_recipes"))
      };
    }
    var initialRecipes = JSON.stringify([{
      title: "Hot Buttered Toffee Coffee",
      img: "http://www.dunkincreamer.com/wp-content/uploads/2016/07/EnglishToffeeCoffee.png",
      ingredients: "coffee mocha ice cream, hot coffee, butterscotch topping, almond liqueur, whipped topping, toffee pieces or 14.79 ml chopped chocolate-covered english toffee bar",
      instructions: "Spoon ice cream into a large coffee mug;pour coffee, butterscotch topping and almond liqueur over ice cream. Garnish with a dollop of whipped cream and sprinkle of toffee chips."
    }, {
      title: "Mint Espresso",
      img: "http://www.lavazza.us/default/.content/images/recipe/caffe_padovano_782x441.jpg",
      ingredients: "espresso, milk, double cream, mint syrup and cocoa powder",
      instructions: "Brew an espresso in a cappuccino cup. Add 60ml of the Mint Milk Cream. Lightly dust with bitter cocoa powder. Preparation of Mint Milk Cream (serves 2): Pour the cold whole milk into a large bowl. Add the double cream, milk and mint syrup. Whip with an electric whisk to obtain a soft fluffy mixture. We recommend preparing this recipe with espresso coffee."
    }]);
    localStorage.setItem("_feuerbird29_recipes", initialRecipes);
    return {
      recipes: [{
        title: "Hot Buttered Toffee Coffee",
        img: "http://www.dunkincreamer.com/wp-content/uploads/2016/07/EnglishToffeeCoffee.png",
        ingredients: "coffee mocha ice cream, hot coffee, butterscotch topping, almond liqueur, whipped topping, toffee pieces or 14.79 ml chopped chocolate-covered english toffee bar",
        instructions: "Brew an espresso in a cappuccino cup. Add 60ml of the Mint Milk Cream. Lightly dust with bitter cocoa powder. Preparation of Mint Milk Cream (serves 2): Pour the cold whole milk into a large bowl. Add the double cream, milk and mint syrup. Whip with an electric whisk to obtain a soft fluffy mixture. We recommend preparing this recipe with espresso coffee."
      }, {
        title: "Mint Espresso",
        img: "http://www.lavazza.us/default/.content/images/recipe/caffe_padovano_782x441.jpg",
        ingredients: "espresso, milk, double cream, mint syrup and cocoa powder",
        instructions: "Brew an espresso in a cappuccino cup. Add 60ml of the Mint Milk Cream. Lightly dust with bitter cocoa powder. Preparation of Mint Milk Cream (serves 2): Pour the cold whole milk into a large bowl. Add the double cream, milk and mint syrup. Whip with an electric whisk to obtain a soft fluffy mixture. We recommend preparing this recipe with espresso coffee."
      }]
    };
  },
  handleEdit: function handleEdit(e) {},
  handleDelete: function handleDelete(e) {},
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
  handleTitleChange: function handleTitleChange(e) {
    this.props.title = e.target.value;
  },
  handleImgChange: function handleImgChange(e) {
    this.props.img = e.target.value;
  },
  handleIngredientsChange: function handleIngredientsChange(e) {
    this.props.ingredients = e.target.value;
  },
  handleInstructionsChange: function handleInstructionsChange(e) {
    this.props.instructions = e.target.value;
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
                    defaultValue: this.props.title,
                    onChange: this.handleTitleChange,
                    type: "text",
                    id: "title",
                    placeholder: "Title... (required)",
                    required: "required"
                  }),
                  React.createElement("br", null),
                  React.createElement("input", {
                    defaultValue: this.props.img,
                    onChange: this.handleImgChange,
                    type: "url",
                    id: "img",
                    placeholder: "Image URL...",
                    required: "required"
                  }),
                  React.createElement("br", null),
                  React.createElement("textarea", {
                    defaultValue: this.props.ingredients,
                    onChange: this.handleIngredientsChange,
                    type: "text",
                    id: "ingredients",
                    placeholder: "Ingredients... (required)",
                    required: "required"
                  }),
                  React.createElement("br", null),
                  React.createElement("textarea", {
                    defaultValue: this.props.instructions,
                    onChange: this.handleInstructionsChange,
                    type: "text",
                    id: "instructions",
                    placeholder: "Instructions... (required)",
                    onChange: this.handleUserInput,
                    required: "required"
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
                  data.ingredients
                ),
                React.createElement(
                  "div",
                  { className: "panel-body" },
                  data.instructions
                ),
                React.createElement(
                  "div",
                  { className: "panel-footer" },
                  React.createElement(
                    "button",
                    { className: "btn taskbtn" },
                    "Edit"
                  ),
                  React.createElement(
                    "button",
                    { className: "btn taskbtn" },
                    "Delete"
                  )
                )
              )
            );
          })
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