class Column
  constructor: (@position, @dotCodes, @totalPositions, @sceneWidth, @size = 4, @speed = 3) ->
    @calculatePositions()
    @domElm = document.createElement('div')
    @domElm.setAttribute('class', 'slideCol')
    @domElm.setAttribute('data-col', position)
    @domElm.style.right = "#{@startPoint}px"
    for dotCode in @dotCodes
      dot = document.createElement('div')
      dot.setAttribute('class', 'slideDot')
      dot.className += " full" if dotCode > 0
      @domElm.appendChild(dot)

  enter: ->
    @domElm.style.right = "#{@middlePoint}px"

  leave: ->
    @domElm.style.right = "#{@finalPoint}px"

  calculatePositions: ->
    @startPoint = -(6 * @position * @position) - @size
    @middlePoint = @sceneWidth / 2 + (@totalPositions / 2 - @position) * @size
    exitPosition = @totalPositions - @position
    @finalPoint = @sceneWidth + (6 * exitPosition * exitPosition) + @size
