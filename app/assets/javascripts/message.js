$(function(){
  function buidHTML(message){
    var html = `<div class="upper-message">
                  <span class="upper-message__user-name">
                    ${message.user_name}
                  </span>
                  <div class="upper-message__date">
                    ${message.created_at}
                  </div>
                </div>
                <div class="lower-message">
                  <p class="lower-message__content">
                    ${message.text}
                  </p>
                </div>`;
    return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buidHTML(data);
      $('.message').append(html)
      console.log($('#message_main').get(0).scrollHeight);
      $('.contents').animate({scrollTop: $('#message_main').get(0).scrollHeight
      }, "slow");

      $('.form__message').val('')
    }).fail(function(e){
      alert('error');
    });
  });
});
