var React = require('react');
var Config = require('../../config');
var Float5 = require('./float5');
module.exports = React.createClass({
  getInitialState: function() {
    return {
      float: 5
    }
  },
  render: function() {
    var map = this.props.content;
    var img = 'float' + map;
    img = Config[img];
    var Float = '';
      if (map == 5) {
        Float = <Float5/>
      }
      else if (map == 4) {
        Float = <Float4/>;
      }
      else if (map == 3) {
        Float = <Float3/>;
      }
      else if (map == 2) {
        Float = <Float2/>;
      }
      else if (map == 1) {
        Float = <Float1/>;
      }
    return (
        <g id="drag" className="float5">
          <image overflow="visible" width={img.width} height={img.height} xlinkHref={img.img} ></image>
          {Float}
        </g>
    );
  }
});
