class FamilySerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :email
end
