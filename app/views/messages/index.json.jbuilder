json.array! @new_messages do |message|
  json.id message.id
  json.text message.content
  json.user.name message.user.name
  json.created_at message.created_at
  json.image.url message.image.url
end
