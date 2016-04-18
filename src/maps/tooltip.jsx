var React = require('react');


module.exports = React.createClass({
  getInitialState: function() {
    return {
      elem: this.props.elem
    }
  },
  render: function() {
    console.log(this.props.elem)
    return (
      <div className="tooltip">
        I have a tooltip.Hover over me to see it.
      </div>
    );
  }
});
