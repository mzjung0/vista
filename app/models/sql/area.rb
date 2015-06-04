class Sql::Area < Sql::Base
  def insert(data)
    @command = @conn.execute("select * from app_area where area_code = '#{data['area_code']}'")
    if @command.count <= 0
      update(data)
    else
      @command = @conn.execute("insert into app_area (area_code, area_name, status) values
        ('#{data['area_code']}', '#{data['area_name']}', '#{data['status']}')")
      @command.insert
      @conn.close
    end
  end

  def update(data)
    # @command = @conn.execute("update app_area (area_code, area_name, status) values
    #     ('#{data['area_code']}', '#{data['area_name']}', '#{data['status']}')")
    # @command.insert
    # @conn.close
  end
end
