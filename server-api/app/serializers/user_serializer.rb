class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :point, :admin
end
