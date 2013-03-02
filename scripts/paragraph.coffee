class Paragraph
  constructor: (selector) ->
    @elm = document.getElementById(selector)
    @learnWhat = @elm.getElementsByTagName('em')[0]

  appear: ->
    @elm.style.opacity = 1

  disappear: ->
    @elm.style.opacity = 0

  setText: (text) ->
    # Todo: fade out before setting text and fade in later?
    @learnWhat.innerHTML = text
