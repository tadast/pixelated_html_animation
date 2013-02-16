class Column
  constructor: (@position, @dotCodes, @totalPositions, @sceneWidth, @size = 4, @speed = 3) ->
    @calculatePositions()
    @domElm = document.createElement('div')
    @domElm.setAttribute('class', 'slideCol')
    @domElm.setAttribute('data-col', position)
    @domElm.style.right = "#{@right}px"
    for dotCode in @dotCodes
      dot = document.createElement('div')
      dot.setAttribute('class', 'slideDot')
      dot.className += " full" if dotCode > 0
      @domElm.appendChild(dot)

  next: (exitState, compensate = 1) ->
    if exitState
      @advance(compensate)
    else if !@reachedDestination()
      @advance(compensate)
      @right = Math.min(@right, @destination)
    else
      @right = @destination
    @domElm.style.right = "#{@right}px"


  advance: (compensate) ->
    @right = @right + (@size * @speed * compensate)

  calculatePositions: ->
    @initialPosition = -(6 * @position * @position) / 6
    @destination = @sceneWidth / 2 + (@totalPositions / 2 - @position) * @size
    @right = @initialPosition

  reachedDestination: ->
    @right >= @destination

  reachedEnd: ->
    @right > @sceneWidth