$(function(){
  function buildappendMessage(message){
    var imageurl = '';
      if (message.image_url.url){
        imageurl = `<img src="${message.image_url.url}" class="lower-message__image">`;
      }
    var html = `
    <div class="message" id= "message_main">
      <div class="upper-message" id='${message.id}'>
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
      var html = buildappendMessage(data);
      $('.contents').append(html);
      $('.contents').animate({scrollTop: $('.contents')[0].scrollHeight}, 1);
      $('.form__message').val('');
      $('.hidden').val('');
    }).fail(function(e){
      alert('error');
    })
    return false;
  });

  function update(){
    var url = window.location.pathname;
    if(url.match(/\/groups\/\d\/messages/)){
    var message_id = $('.upper-message').last(0).attr('id');
    $.ajax({
      url: url,
      type: 'GET',
      data: {id: message_id},
      dataType: 'json',
    })
    .done(function(messages){
      if (messages.length !== 0){
        messages.forEach(function(message){
          var html = buildappendMessage(message);
          $('.contents').append(html);
        });
      }
      $('.contents').animate({scrollTop: $('.contents')[0].scrollHeight}, 1);
      return false
    })
    .fail(function(){
      alert('error');
    })
  }
}
setInterval(update, 5000);
});
