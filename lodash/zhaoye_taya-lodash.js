var zhaoye_taya = {
    chunk: function(ary, size) {
    var result = []
    for (var i = 0; i < ary.length; i++) {
      
    }
  },
  compact: function(ary) {
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
  head: function(ary) {
    return ary[0]
  },
  fill: function(ary, value, start, end) {
    for (var i = 0; i < ary.length; i++){
      
    }
  },
  ary: function(f, n = f.length) {
    return function(...args) {
      return f(...args.slice(0,n))
    }
  },
  before: function(n,func) {
    var c = 0
    var result
    return function(...args) {
      if(c < n) {
        return result = func.call(this, ...args)
        c++
      }else {
        return result
      }
    }
  },
  after: function(n,func) {
    var c = 0
    return function(...args) {
      c++
      if(c > n) {
        return func.call(this, ...args) 
      }
    }
  },
  flip: function(func) {
    return function (...args) {
      return func(...args, reverse())
    }
  },
  negata: function(predicate) {
    return function(...args) {
      return !predicate(...args)
    }
  },
  spread: function(func) {
    return function(ary) {
      return func.apply(this, ary)
    }
    return func.f.bind(func, this)(ary)
  },
  
}
