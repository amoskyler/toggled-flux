/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React, Router*/


//Common method to create app if it doesn't exist already
var app = app || {};

(function () {
  'user strict';

  var ToggleApp = React.createClass({
    getInitialState: function () {
      return {
        toggled: this.props.model.toggled
      };
    },

    handleToggle: function (event) {
      event.preventDefault();
      this.props.model.save('toggled', !this.state.toggled);
      this.setState({toggled: !this.state.toggled});
    },

    render: function () {
      return (
        <div
          className={React.addons.classSet({
            toggled: this.state.toggled
          })}
          onClick={this.handleToggle}>
          {"toggled: " + this.state.toggled}
        </div>
      );
    }
  });

  // This is where we actually call our app
  // And register it to an element on the DOM
  var model = new app.ToggleModel('react-toggled');

  function render () {
    React.render (
      <ToggleApp model={model}/>,
      document.getElementsByClassName('toggleapp')[0]
    );
  }

  model.subscribe(render);
  render();

})();
