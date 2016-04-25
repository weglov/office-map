module.exports = {
  container: '#map',
  float6: {
    img:'http://office.ren-tv.com/company/officemap/src/image/office6.png?2',
    height: '600',
    width: '1440'
  },
  float5: {
    img:'http://office.ren-tv.com/company/officemap/src/image/office5.jpg?2',
    height: '600',
    width: '1440'
  },
  float4: {
    img:'http://office.ren-tv.com/company/officemap/src/image/office4.png?2',
    height: '600',
    width: '1440'
  },
  float3: {
    img:'http://office.ren-tv.com/company/officemap/src/image/office3.png?2',
    height: '1062',
    width: '1440'
  },
  float2: {
    img:'http://office.ren-tv.com/company/officemap/src/image/office2.png?2',
    height: '668',
    width: '1440'
  },
  float1: {
    img:'http://office.ren-tv.com/company/officemap/src/image/office1.png?2',
    height: '861',
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
  },
  dublicate: {
      "325": "326",
      "326": "325",
      "310": "311",
      "311": "310",
      "307": "308",
      "308": "307",
      "327": "329",
      "329": "327"
    }
}
