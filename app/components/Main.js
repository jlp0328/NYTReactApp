var React = require("react");

var Saved = require("./panels/Saved.js");
var Search = require("./panels/Search.js");

var Main = React.createClass({

  // Here we set a generic state associated with the number of clicks
  // getInitialState: function() {

  // },

  // Here we describe this component's render method
  render: function() {
    return (

       <div className="container">

            <div className ="jumbotron jumbotron-fluid">
              <div className ="container">
                <h1 className ="display-3">New York Times Article Scrubber</h1>
                <p className ="lead">Search for and annotate articles of interest!</p>
              </div>
            </div>

                <div className="col-md-12">

                <Search />

                </div>

                <div className="col-md-12">

                <Saved />

                </div>

              </div>
    );
  }

});

// Export the component back for use in other files
module.exports = Main;
