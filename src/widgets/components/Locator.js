/** @jsx React.DOM */
define([
  'react'
], function(React) {

  var LocatorWidget = React.createClass({
    getInitialState: function() {
      return {
        x: 0,
        y: 0
      };
    },

    componentDidMount: function() {
      this.props.map.on('mouse-move', function(e) {
        this.update(e.mapPoint);
      }.bind(this));
    },

    update: function(data) {
      this.setState(data);
    },

    render: function() {
      return (
        <div className='well'>
          <label>x: {this.state.x.toFixed(3)}</label>
          <br/>
          <label>y: {this.state.y.toFixed(3)}</label>
        </div>
      );
    }
  });

  return LocatorWidget;

});
