json.array! @users do |user|
  json.id user.id
  json.user_name @users.user_name
end
