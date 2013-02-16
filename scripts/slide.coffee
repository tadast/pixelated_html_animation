class Slide
  constructor: (@elmId, @matrix) ->
    @elm = document.getElementById(@elmId)
    @cols = [] # we'll keep vertical lines of dots in columns
    @pauseLength = 1000
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
    @lastFrame = Date.now()
    requestAnimFrame( => @advanceFrame())

  resume: ->
    @pauseDone = true
    @start()

  advanceFrame: ->
    compFactor = @compFactor()
    console.log compFactor
    for col in @cols
      col.next(@pauseDone, compFactor)

    if @pauseDone
      if @cols[@cols.length - 1].reachedEnd()
        @cols = []
        console.log "boom"
        # TODO remove dom elements
      else
        requestAnimFrame( => @advanceFrame())
    else
      if !@cols[@cols.length - 1].reachedDestination()
        requestAnimFrame( => @advanceFrame())
      else
        resume = =>@resume()
        window.setTimeout resume, @pauseLength

  compFactor: ->
    now = Date.now()
    delta = now - @lastFrame
    @lastFrame = now
    delta / 17