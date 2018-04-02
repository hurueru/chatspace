$(function() {

function appendUser(user) {
  var html = `<div class="chat-group-user clearfix">
  <p class="chat-group-user__name">
    ${user.name}
  </p>
  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
</div>`
  $("#user-search-result").append(html);
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
     $("#user-search-result").empty();
     if ($.isArray(users)) {
       users.forEach(function(user){
         appendUser(user);
       });
     }
     else {
       return false;
     }
   })
    .fail(function() {
      alert('ユーザー名の検索に失敗しました。');
    })
  });

function addUser(user) {
  var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
  <input name='group[user_ids][]' type='hidden' value="${user.attr("data-user-id")}">
  <p class='chat-group-user__name'>${user.attr("data-user-name")}</p>
  <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
</div>
`
  $(".chat-group-form__field--right-member").append(html);
}

  $("#user-search-result").on('click', '.chat-group-user__btn--add', function(){
    input = $(this);
    var add_user_html = addUser(input);
    $(".chat-group-form__field--right-member").append(add_user_html);
   input.parent().remove();
    });

  $(document).on('click', '.user-search-remove', function(){
    $(".chat-group-user.clearfix.js-chat-member").parent().remove();
  });
  });
