class Sql::Base
  @conn = nil
  @command = nil

  def initialize
    @conn = TinyTds::Client.new username: 'sa', password: 'sa',
      host: '192.168.1.107', database: 'SDB-VISTA_TEST'
  end
end
