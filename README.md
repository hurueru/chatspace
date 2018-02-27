# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


## usersテーブル

|Column|Type|Options|
|------|----|-------|
|id    |integer|null:  false,unique,foreign_key: true|
|name  |string|null:  false,foreign_key: true|
|email |text|null:  false,foreign_key: true|
|password|text|null:  false,foreign_key: true|

### Association
- has_many :groups
- has_many :messages

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id    |integer|null: false, foreign_key: true|
|name  |string|null: false, foreign_key: true|
|user  |string|null: false, foreign_key: true|
|message|text|null: false, foreign_key: true|

### Association
- belongs_to :message
- has_many :users

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body  |text|null: false, foreign_key: true|
|image |string|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- has_many :groups
- has_many :users


