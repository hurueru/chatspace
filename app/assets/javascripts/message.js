$(function(){
  function buidHTML(comment){
    var html = `<p>
                  <strong>
                    <a href=${message.id}>${message.user_name}</a>
                    :
                    </strong>
                    ${message.text}
                  </p>`
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    console.log(this)
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
      $('.messages').append(html)
      $('.textbox').val('')
    })
    .fail(function(){
      alert('error');
    })
  })
  $(function() {
    $('#html').animate({
      'marginTop': '600px'
    },1000);
  });
});
