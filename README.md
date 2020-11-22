# efncy-rotator
it rotates things


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
