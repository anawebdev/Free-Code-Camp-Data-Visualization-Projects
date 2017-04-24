'use strict';

//https://fcctop100.herokuapp.com/api/fccusers/top/recent
//https://fcctop100.herokuapp.com/api/fccusers/top/alltime

var Camper = React.createClass({
  displayName: 'Camper',

  getInitialState: function getInitialState() {
    return {
      person: [],
      type: 'recent'
    };
  },
  recent: function recent() {
    var _this = this;

    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent').then(function (data) {
      _this.setState({
        person: data,
        type: 'recent'
      });
    });
  },
  allTime: function allTime() {
    var _this2 = this;

    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime').then(function (data) {
      _this2.setState({
        person: data,
        type: 'allTime'
      });
    });
  },
  componentDidMount: function componentDidMount() {
    this.recent();
  },
  handleClick: function handleClick() {},
  render: function render() {
    return React.createElement(
      'tr',
      null,
      React.createElement(
        'td',
        null,
        this.props.rank
      ),
      React.createElement(
        'td',
        null,
        this.props.img
      ),
      React.createElement(
        'td',
        null,
        this.props.username
      ),
      React.createElement(
        'td',
        null,
        this.props.recent
      ),
      React.createElement(
        'td',
        null,
        this.props.alltime
      )
    );
  }

});

var LeaderBoard = React.createClass({
  displayName: 'LeaderBoard',

  render: function render() {
    return React.createElement(
      'div',
      { className: 'container-fluid' },
      React.createElement(
        'div',
        { className: 'row' },
        React.createElement('div', { className: 'col-sm-1' }),
        React.createElement(
          'div',
          { className: 'col-sm-10' },
          React.createElement(
            'table',
            { align: 'center' },
            React.createElement(
              'tr',
              null,
              React.createElement(
                'th',
                null,
                'Number'
              ),
              React.createElement(
                'th',
                null,
                'Icon'
              ),
              React.createElement(
                'th',
                null,
                'Name'
              ),
              React.createElement(
                'th',
                { onClick: this.recent },
                '30 Days'
              ),
              React.createElement(
                'th',
                { onClick: this.allTime },
                'All Time'
              )
            ),
            React.createElement(Camper, null),
            React.createElement(Camper, null),
            React.createElement(Camper, null)
          )
        ),
        React.createElement('div', { className: 'col-sm-1' })
      )
    );
  }
});

ReactDOM.render(React.createElement(LeaderBoard, null), document.getElementById('app'));

//this.state.type=='recent' ? 'allTime' : 'recent'