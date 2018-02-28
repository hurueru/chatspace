# README

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|id    |integer|       |
|name  |string|null:  false|
|email |text|unique: true|
|password|text|unqiue:  true|

### Association
- has_many :groups
- has_many :messages

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id    |integer|foreign_key: true|
|name  |string|null: false|
|user  |string|null: false|
|message|text|      |

### Association
- belongs_to :message
- has_many :users

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body  |text|null: false|
|image |string|       |
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|through|
|group_id|integer|through|

### Association
- has_many :groups
- has_many :users


