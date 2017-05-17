'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GridHeight = 30;
var GridWidth = 60;

//STATELESS COMPONENTS

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _React$Component.call(this, props));
  }

  return Header;
}(React.Component);

var Footer = function (_React$Component2) {
  _inherits(Footer, _React$Component2);

  function Footer(props) {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _React$Component2.call(this, props));
  }

  return Footer;
}(React.Component);

var App = function (_React$Component3) {
  _inherits(App, _React$Component3);

  function App(props) {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _React$Component3.call(this, props));
  }

  App.prototype.render = function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(Header, null),
      React.createElement(App, null),
      React.createElement(Footer, null)
    );
  };

  return App;
}(React.Component);

//MAKES GRID - height is number of rows; width is number of columns; clear should be true if the board needs to be cleared

var Grid = function Grid(height, width, clear) {
  var grid = [];
  for (var i = 0; i < height; i++) {
    var row = [];
    for (var j = 0; j < width; j++) {
      if (clear) {
        row.push({ status: 0 });
      } else {
        var value = Math.round(Math.random());
        row.push({ status: value });
      }
    }
    grid.push(row);
  }
  console.log(grid);
  return grid;
};

var Board = function (_React$Component4) {
  _inherits(Board, _React$Component4);

  function Board() {
    _classCallCheck(this, Board);

    return _possibleConstructorReturn(this, _React$Component4.apply(this, arguments));
  }

  Board.prototype.render = function render() {
    return React.createElement(
      'div',
      null,
      this.props.board.map(function (row, idxi) {
        return React.createElement(
          'tr',
          { key: idxi },
          row.map(function (column, idxj) {
            return React.createElement('td', { key: idxj,
              className: column.status === 1 ? 'alive' : 'dead' });
          })
        );
      })
    );
  };

  return Board;
}(React.Component);

Grid(5, 3, false);
ReactDOM.render(React.createElement(App, null), document.getElementById("app"));