class Audit < ActiveRecord::Base
  default_scope {order('created_at DESC')}
  belongs_to :user

  def as_json(includes=nil)
    {
      auditable_id: self.auditable_id,
      auditable_type: self.auditable_type,
      associated_id: self.associated_id,
      associated_type: self.associated_type,
      user_id: self.user_id,
      user_type: self.user_type,
      username: self.user ? self.user.email : nil,
      action: self.action,
      audited_changes: self.audited_changes,
      version: self.version,
      comment: self.comment,
      remote_address: self.remote_address,
      request_uuid: self.request_uuid,
      created_at: self.created_at
    }
  end
end
