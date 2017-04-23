'use strict';

//https://fcctop100.herokuapp.com/api/fccusers/top/recent
//https://fcctop100.herokuapp.com/api/fccusers/top/alltime

var Camper = React.createClass({
  displayName: 'Camper',

  componentWillMount: function componentWillMount() {
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
  },
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
                null,
                '30 Days'
              ),
              React.createElement(
                'th',
                null,
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