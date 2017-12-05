
// I stole this function from elsewhere, which is why the name is weird.
function iotaArray(n) {
  var result = new Array(n)
  for(var i=0; i<n; ++i) {
    result[i] = i
  }
  return result
}

function scale(n) {
  var result = new Array(3)
  for(var i=0; i<4; ++i) {
    result[i] = i * n + 1
  }
  console.log(result)
  return result
}

Plotly.plot('graph', {
  data: [{
    x: [1, 2, 3],
    y: [1, 1, 1],
    line: {color: 'red'}
  }],
  layout: {
    sliders: [{
      steps: iotaArray(3).map((i) => ({
        label: i,
        method: 'animate',
        args: [{
          data: [{y: scale(i)}]
        }]
      }))
    }]
  }
});
