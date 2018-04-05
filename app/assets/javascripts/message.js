$(function(){
  function buidappendMessage(message){
    imageurl = '';
    if (message.image){
      imageurl = `<img src="${message.image.url}" class="lower-message__image">`
    }

    var html = `
    <div class="message" id= "message_main">
      <div class="upper-message" id='${ message.id }'>
        <div class="upper-message__user-name">
          ${message.user_name}
        </div>
        <div class="upper-message__date">
          ${message.created_at}
        </div>
      </div>
      <div class="lower-message">
        <p class="lower-message__content">
          ${message.text}
        </p>
        ${imageurl}
      </div>
    </div>`;
    return html;
  }


  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')

    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buidappendMessage(data);
      $('.contents').append(html);
      $('.contents').animate({scrollTop: $('.contents')[0].scrollHeight});
      $('.form__message').val('')
    }).fail(function(e){
    alert('error');
    })
    return false;
  })
  // });

  setInterval(function() {
  $.ajax({
    url: location.href.json,
  })
  .done(function(data) {
  })
  .fail(function(data) {
  });
} else {
    clearInterval(interval);
  } , 5000 );
  });

  // function update(){
  //   setInterval(update, 5000);
  //   var url = window.location.pathname;
  //   if(url.match(/\/groups\/\d\/messages/)){

  //   var message_id = $('.upper-message').last(0).attr('id');
  //   console.log(message_id);
  //   $.ajax({
  //     url: url,
  //     type: 'GET',
  //     data: {
  //       message: { id: message_id }
  //     },
  //     dataType: 'json',
  //     processData: false,
  //     contentType: false
  //   })

  //   .done(function(messages){
  //     console.log(messages);
  //     messages.forEach(function(message){
  //       var html = buidappendMessage(message);
  //       $('.contents').append(html);
  //     });
  //   })
  //   .fail(function(){
  //     alert('error')
  //   })

  //   }
  // }
});
