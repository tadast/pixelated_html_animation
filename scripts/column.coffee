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

  enter: ->
    @domElm.style.right = "#{@destination}px"

  leave: ->
    @domElm.style.right = "#{-@right * 2 + @sceneWidth}px"

  calculatePositions: ->
    @right = -(6 * @position * @position) - @size
    @destination = @sceneWidth / 2 + (@totalPositions / 2 - @position) * @size
