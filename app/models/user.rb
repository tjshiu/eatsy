# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  image_url       :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :email, :password_digest, :session_token, :image_url, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, :email, :session_token, uniqueness: true
  after_initialize :ensure_session_token, :ensure_image_url

  has_many :products,
    foreign_key: :user_id,
    primary_key: :id,
    class_name: :Product

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil if user.nil?
    user && user.valid_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password);
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def ensure_image_url
    self.image_url ||= "http://res.cloudinary.com/dwanjkcku/image/upload/v1523240992/happy_orange.png"
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

end
