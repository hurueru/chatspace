# DB設計

## users table

|Column|Type|Options|
|------|----|-------|
|name  |string|index: true, null:  false, unique: true|
|mail  |string|null: false|

### Association
- has_many :groups
- has_many :messages


## groups table

|Column|Type|Options|
|------|----|-------|
|name  |string|null: false, unique: true|

### Association
- belongs_to :message
- has_many :users


## messages table

|Column|Type|Options|
|------|----|-------|
|body  |text|       |
|image |string|       |
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## members table

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true, through|
|group_id|integer|null: false, foreign_key: true, through|

### Association
- belongs_to :group
- belongs_to :user


