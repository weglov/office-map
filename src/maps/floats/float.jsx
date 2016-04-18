var React = require('react');
var Config = require('../../config');
var Float5 = require('./float5');
// var Float4 = require('./float5');
var Float3 = require('./float3');
var Float2 = require('./float2');
// var Float1 = require('./float5');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      float: this.props.content
    }
  },
  componentWillReceiveProps: function(nextProps) {
    this.setState({float: nextProps.content});
  },
  shouldComponentUpdate: function(a,e) {
    return true;
  },
  render: function() {
    var map = this.state.float;
    var img = 'float' + map;
    img = Config[img];
    var Float = '';
      if (map == 5) {
        Float = <Float5/>
      }
      // else if (map == 4) {
      //   Float = <Float4/>;
      // }
      else if (map == 3) {
        Float = <Float3/>;
      }
      else if (map == 2) {
        Float = <Float2/>;
      }
      else if (map == 1) {
        Float = <Float1/>;
      }
      else {
        
      }
    return (
        <g id="drag" ref="drag" className={'float__' + map}>
          <image overflow="visible" width={img.width} height={img.height} xlinkHref={img.img} ></image>
          {Float}
        </g>
    );
  }
});
