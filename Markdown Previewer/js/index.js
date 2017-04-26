"use strict";

//https://fcctop100.herokuapp.com/api/fccusers/top/recent
//https://fcctop100.herokuapp.com/api/fccusers/top/alltime

var LeaderBoard = React.createClass({
  displayName: "LeaderBoard",

  getInitialState: function getInitialState() {
    return {
      camper: [],
      type: "recent"
    };
  },
  recent: function recent() {
    var self = this;
    $.get("https://fcctop100.herokuapp.com/api/fccusers/top/recent", function (data) {
      self.setState({
        camper: data,
        type: "recent"
      });
    }.bind(this));
  },
  allTime: function allTime() {
    var self = this;
    $.get("https://fcctop100.herokuapp.com/api/fccusers/top/alltime", function (data) {
      self.setState({
        camper: data,
        type: "alltime"
      });
    }.bind(this));
  },
  componentDidMount: function componentDidMount() {
    this.recent();
  },
  handleRecentClick: function handleRecentClick(e) {
    this.recent();
  },
  handleAlltimeClick: function handleAlltimeClick(e) {
    this.allTime();
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: "container-fluid" },
      React.createElement(
        "div",
        { className: "row" },
        React.createElement("div", { className: "col-sm-1" }),
        React.createElement(
          "div",
          { className: "col-sm-10" },
          React.createElement(
            "table",
            { align: "center" },
            React.createElement(
              "tr",
              null,
              React.createElement(
                "th",
                null,
                "#"
              ),
              React.createElement(
                "th",
                null,
                "Icon"
              ),
              React.createElement(
                "th",
                null,
                "FreeCodeCamper"
              ),
              React.createElement(
                "th",
                { onClick: this.recent },
                "30 Days"
              ),
              React.createElement(
                "th",
                { onClick: this.allTime },
                "All Time"
              )
            ),
            this.state.camper.map(function (user, index) {
              return React.createElement(
                "tr",
                null,
                React.createElement(
                  "td",
                  null,
                  index + 1
                ),
                React.createElement(
                  "td",
                  null,
                  React.createElement("img", { src: user.img })
                ),
                React.createElement(
                  "td",
                  null,
                  React.createElement(
                    "a",
                    { href: "https://freecodecamp.com/" + user.username, target: "_blank" },
                    user.username
                  )
                ),
                React.createElement(
                  "td",
                  null,
                  user.recent
                ),
                React.createElement(
                  "td",
                  null,
                  user.alltime
                )
              );
            })
          )
        ),
        React.createElement("div", { className: "col-sm-1" })
      )
    );
  }
});

ReactDOM.render(React.createElement(LeaderBoard, null), document.getElementById("app"));