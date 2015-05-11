require 'rails_helper'

RSpec.describe User, type: :model do  
  context "Creating users" do
    it "should be able to create a user" do
      test = User.new
      test.email = "test@test.com"
      test.password = "testtest"
      test.password_confirmation = "testtest"
      expect(test.save).to eq true
    end

    it "should not be able to create a user with the same email" do
      test = User.new
      test.email = "test@test.com"
      test.password = "testtest"
      test.password_confirmation = "testtest"      
      expect(test.save).to eq true

      test = User.new
      test.email = "test@test.com"
      test.password = "testtest"
      test.password_confirmation = "testtest"
      expect(test.save).to eq false
    end
  end

  context "Getting a user" do
    it "should be able to get a user based on email" do
      test = User.new
      test.email = "test@test.com"
      test.password = "testtest"
      test.password_confirmation = "testtest"
      test.save

      test = User.find_by_email("test@test.com")
      expect(test).not_to eq nil
    end

    it "some value should equal yahoo!" do
      test = User.new
      expect(test.some_value).to eq "yahoo!"
    end
  end
end
