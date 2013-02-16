class Column
  constructor: (@position, @dotCodes, @totalPositions, @sceneWidth, @size = 4, @speed = 4) ->
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

  next: (exitState) ->
    if exitState || !@reachedDestination()
      @right = Math.min(@right + @size * 4, @destination)
    else if !exitState
      @right = @destination
    @domElm.style.right = "#{@right}px"


  calculatePositions: ->
    @initialPosition = -(6 * @position * @position) / 6
    @destination = @sceneWidth / 2 + (@totalPositions / 2 - @position) * @size
    console.log @destination
    @right = @initialPosition

  reachedDestination: ->
    @right >= @destination

  reachedEnd: ->
    @right > @sceneWidth