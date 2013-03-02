class Logo
  constructor: (selector) ->
    @elm = document.getElementById('mainLogo')

  appear: ->
    @elm.style.opacity = 1
    @elm.style.bottom = 0

  dissapear: ->
    @elm.style.opacity = 0
    @elm.style.bottom = '50px'