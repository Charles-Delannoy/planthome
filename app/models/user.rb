class User < ApplicationRecord
  has_many :user_plants
  has_many :plants, through: :user_plants

  has_secure_password
  validates :username, presence: true
  validates :username, uniqueness: true
  validates :username, length: { minimum: 4 }
end
