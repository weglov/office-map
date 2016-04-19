module.exports = {
  container: '#map',
  float5: {
    img:'./src/image/office5.png',
    height: '600',
    width: '1440'
  },
  float4: {
    img:'./src/image/office1.png',
    height: '600',
    width: '1440'
  },
  float3: {
    img:'./src/image/office3.png',
    height: '1062',
    width: '1440'
  },
  float2: {
    img:'./src/image/office2.png',
    height: '668',
    width: '1440'
  },
  float1: {
    img:'./src/image/office1.png',
    height: '600',
    width: '1440'
  },
  zoomStep: 0.35,
  zoomMaxStep: 1.7,
  zoomMinStep: 1,
  addTooltip: function() {
    $('.tooltip').addClass('true')
  },
  removeTooltip: function() {
    $('.tooltip').removeClass('true')
  }
}
