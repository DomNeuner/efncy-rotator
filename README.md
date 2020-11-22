# efncy-rotator
it rotates things

<p class="codepen" data-height="298" data-theme-id="dark" data-default-tab="result" data-user="DomNeuner" data-slug-hash="YzWoBbz" style="height: 298px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="EFNCY - Rotator Speedy Demo">
  <span>See the Pen <a href="https://codepen.io/DomNeuner/pen/YzWoBbz">
  EFNCY - Rotator Speedy Demo</a> by Dom Neuner (<a href="https://codepen.io/DomNeuner">@DomNeuner</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>


### setup

please don't break it this time, copy and paste it all in to a custom widget, same as last time


There's several fields to set to set it up:


  - select your images in SE, you can select multiple and it'll auto add
  - Time between image - default is 3mins (180000)
  - Time to show image - default is 7 seconds (7000)
  - Time to animate - default is .5 seconds (500)
  
  Notes:
  
  - it starts with image hidden, so it will take the `time_between_images` until it first shows up
  - it can survive scene changes as long as you don't have `shutdown source` or `refresh browser when visible` enabled on the browser source
  - it assumes images will be wider than taller or at most, square. If you need this changing, holla.
