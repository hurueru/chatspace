json.array! @new_messages do |message|
  json.id message.id
  json.text message.content
  json.user_name message.user.name
  json.created_at message.created_at
  json.image_url message.image
end
