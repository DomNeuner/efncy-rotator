window.addEventListener('onWidgetLoad', function (obj) {
  field_data = obj.detail.fieldData
  time = field_data.time_between_images
  console.log(time)

  // initing vars becasue we're cool like that
  // also yes i'm using jquery because i'm lazy
  // so fuck you

  // element inits
  const container = $('.container')

  // getting info from data
  const images = field_data.images
  const time_between_images = field_data.time_between_images
  const time_to_display = field_data.time_to_display
  const time_to_animate = field_data.time_to_animate

  // creating a sleeperooni
  function sleep (ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  // hiding container until the rotator kicks in
  container.hide()

  // populating the rotator
  images.forEach(function (item, index) {
    container.append("<img src='" + item + "'/> ")
    console.log(index + ' Inserted img with url: ' + item)
  })

  // creating the rotator
  const slider = simpleslider.getSlider({
    container: document.getElementById('slider'),
    paused: true,
    duration: 0
  })

  // hiding container until the rotator kicks in
  container.hide()

  // animation functions
  function animate_rotator_in () {
    container.fadeIn(time_to_animate, function () {
      console.log('animate in complete')
    })
  };

  function animate_rotator_out () {
    container.fadeOut(time_to_animate, function () {
      console.log('animate out complete')
    })
  };

  // main rotation function
  async function image_rotation () {
    console.log('starting image rotation')
    animate_rotator_in()

    slider.next()

    console.log('pausing to display image for:' + time_to_display)
    await sleep(time_to_display)

    console.log('finished pausing')
    animate_rotator_out()

    console.log('finishing image rotation')
  };

  const rotation_interval = setInterval(
    function () {
      image_rotation()
    }, time_between_images)
})
