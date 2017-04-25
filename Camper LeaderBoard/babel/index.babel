//https://fcctop100.herokuapp.com/api/fccusers/top/recent
//https://fcctop100.herokuapp.com/api/fccusers/top/alltime

var i = 0;

var Camper = React.createClass({
      getInitialState: function() {
        return {
          camper: [],
          type: 'recent'
        }
      },
      recent: function() {
        var self = this;
        $.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent', function(data) {
          console.log(data);
          self.setState({
            information: data,
            camper: data[i].username,
            img: data[i].img,
            alltimePoints: data[i].alltime,
            recentPoints: data[i].recent
          });
        });
      },
      allTime: function() {
        var self = this;
        $.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime', function(data) {
          self.setState({
            camper: data.username,
            img: data.img,
            alltimePoints: data.alltime,
            recentPoints: data[i].recent
          });
        });
      },
      componentDidMount: function() {
        this.recent();
      },
      handleClick: function() {

      },
      render: function() {
          var person = this.props.data.map(function(user, idx) {
            return <Row key={idx} img={user.img} name={user.username} recent={user.recent} allTime={user.alltime}/>
          })

          var Row = React.createClass({
            render: function() {
              return (
                <tr>
            <td>{this.props.key+1}</td>
            <td><img src={this.props.img}></img></td> 
            <td>{this.props.username}</td>
            <td>{this.props.recent}</td>
            <td>{this.props.alltime}</td>
          </tr>
              )
            }
          });

          var Header = React.createClass({
            render: function() {
              return (
                <div className='container-fluid'>
        <div className="row">
          <div className="col-sm-1"></div>
        <div className="col-sm-10">
        <table align='center'>
          <tr>
            <th>#</th>
            <th>Icon</th> 
            <th>Name</th>
            <th onClick={this.recent}>30 Days</th>
            <th onClick={this.allTime}>All Time</th>
          </tr>
          {<Row />}
        </table>
        </div>
          <div className="col-sm-1"></div>
          </div>
    </div>
              );
            }
          })

          var App = React.createClass({
            render: function() {
              return (
                <div>
      {<Header />}
        </div>
              );
            }
          })

          ReactDOM.render(<App />, document.getElementById('app'));