module.exports = {
  zoomIn: function() {
    $('svg g.zoom').attr('transform', 'scale(1.5) translate(0, 0)');
  },
  zoomOut: function() {
    $('svg g.zoom').attr('transform', 'scale(1) translate(0, 0)');
  }
}
