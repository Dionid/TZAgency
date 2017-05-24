$(document).ready(function(){
  var background = $('.background')
  // background.addClass('_animate')
  //
  // setInterval(function(){
  //   background.removeClass('_animate')
  //   setTimeout(function(){
  //     background.addClass('_animate')
  //   }, 10)
  // }, 53000)

  var wh = window.innerHeight

  // height: 615px;
  // $('.tel img')[0].style.top = wh + 'px'

  let addBottomPos = '16%'

  if (wh > 620 && wh < 840) {
    $('.tel')[0].style.top = wh - 615 + 'px'
  } else if (wh > 840){
    $('.tel')[0].style.top = (wh - 834)/2 + 'px'
    addBottomPos = '5%'
  }


  $('.card').velocity({
    left: 0
  }, {
    duration: 1000,
    easing: 'easeOutQuart',
  })

  setTimeout(() => {
    $('.desc').addClass('active')
  }, 300)

  setTimeout(function(){
    // $('.tel').addClass('active')

    $('.tel img').velocity({
      translateY: 0,
    }, {
      duration: 500,
      complete: displayContacts,
      easing: 'easeOutQuart',
    })

  }, 1000)

  function displayContacts() {
    $('.contactsList .item').each(function(i){
      $(this).velocity({
        top: '0px',
      }, {
        duration: 500,
        delay: 100*i,
        easing: 'easeOutQuart',
      })
    })
  }

  setTimeout(function(){
    $('.addBtn').velocity({
      bottom: addBottomPos,
    }, {
      duration: 500,
      easing: 'easeOutQuart',
    })
  }, 2500)

  // setTimeout(function(){
  //   $('.contactsList .item').each(function(i){
  //     $(this).velocity({
  //       top: '0px',
  //     }, {
  //       duration: 500,
  //       delay: 100*i,
  //       easing: 'easeOutQuart',
  //     })
  //   })
  // }, 500)

  // $('.contactsList .item').velocity({
  //   translateY: '0px',
  // }, 500, 'swing')

})

