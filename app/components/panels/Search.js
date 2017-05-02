var React = require("react");
var helpers = require("../../utils/helpers.js");

var Search = React.createClass({

  getInitialState: function(){

      return {

        search: "",
        start: "",
        end: ""

      }



  },

  handleChange: function (event) {

    var newState = {};

    newState[event.target.id] = event.target.value;

    this.setState(newState);

    console.log(event.target);

    // console.log(newState);

    // $("#search").value();

  },

  handleSubmit: function (){

    helpers.postHistory(this.state.search, this.state.start, this.state.end)

  },



  render: function() {
    return (

      <div className="panel panel-default">
        <div className="panel-heading">
          <h2 className="panel-title">Search</h2>
        </div>
        <div className="panel-body text-center">
        <form>

            <input className="form-control form-control-lg" type="text" placeholder="Topic" value={this.state.search} onChange={this.handleChange} id="search" />

            <input className="form-control form-control-lg" type="text" placeholder="Start Year" value={this.state.start} onChange={this.handleChange} id="start" />

            <input className="form-control form-control-lg" type="text" placeholder="End Year" value={this.state.end} onChange={this.handleChange} id="end" />

            <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>

        </form>
        </div>
      </div>
    );

}


});

module.exports = Search;
