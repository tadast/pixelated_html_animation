class Slide
  constructor: (@elmId, @matrix) ->
    @elm = document.getElementById(@elmId)
    @cols = [] # we'll keep vertical lines of dots in columns
    @pauseLength = 1000
    @animLength = 2000 # is set in css for now
    @init()

  # loads and adds the dots
  init: ->
    for w in [0..@matrix.length-1]
      @addColumn(w)

  addColumn: (position) ->
    col = new Column(position, @matrix[position], @matrix.length, window.innerWidth)
    @elm.appendChild(col.domElm)
    @cols.push(col)

  start: ->
    enter = => @enter()
    window.setTimeout enter, 500



  enter: ->
    console.log "entering"
    for col in @cols
      col.enter()
    leave = => @leave()
    window.setTimeout leave, @pauseLength + @animLength

  leave: ->
    console.log "leaving"
    for col in @cols
      col.leave()