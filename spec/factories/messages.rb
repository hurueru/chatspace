FactoryGirl.define do
  factory :message do
    content Faker::Lorem.sentence
    image File.open("#{Rails.root}/public/gahag-011337.jpg")
    user
    group
  end
end
