var zhaoye_taya = {
  chunk: function (ary, size) {
    var result = []
    for (var i = 0; i < ary.length; i++) {
      
    }
  },
  concat: function(ary) {
    var result = []
    for (var i = 0; i < ary.length; i++) {
      if(ary[i]) {
        result.push(ary[i])
      }
    }
    return result
  },
  drop: function(ary, n = 1) {
    var result = []
    for (var i = n; i < ary.length; i++) {
      result.push(ary[i])
    }
    return result
  },
  


}
