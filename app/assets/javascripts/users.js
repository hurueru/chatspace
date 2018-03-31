$(function() {

function appendUser(user) {
  var html = `<div class="chat-group-form__field--right">

  </div>`
}

  $(".chat-group-form__input").on("keyup", function() {
    var input = $(this).val();

    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })
   .done(function(users) {
     $(".chat-group-form__input").empty();
      console.log(users)
     if ($.isArray(users)) {
       users.forEach(function(user){
         appendUser(user);
       });
     }
     else {
       return false;
     }
   })
   .fail(function(){
    return false;
   })
   .
  });
});

    // .done(function(data){ //データを受け取ることに成功したら、dataを引数に取って以下のことする(dataには@usersが入っている状態ですね)
    //   $('#result').find('li').remove();  //idがresultの子要素のliを削除する
    //   $(data).each(function(i, user){ //dataをuserという変数に代入して、以下のことを繰り返し行う(単純なeach文ですね)
    //     $('#result').append('<li>' + user_name + '</li>')
    //   });
    // })

    // .done(function(data){
    //   var html = buidHTML(data);
    //   $('.chat-group-form__input').append(html)
    //   $('#user-search-field').val('')
    // }).fail(function(e){
    //   alert('error');
    // });




