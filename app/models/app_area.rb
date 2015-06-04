class AppArea < ActiveRecord::Base
  establish_connection(
    :adapter  => "sqlserver",
    :host     => "192.168.1.107",
    :port => 1433,
    :username => "sa",
    :password => "HGI@antim1crobi@l",
    :database => "SDB-VISTA_TEST"
  )

  self.table_name = 'dbo.app_area'
end
