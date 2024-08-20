module.exports = {
    development: {
      username: 'sa',
      password: '1@adminsis',
      database: 'taskDb',
      host: 'localhost',
      dialect: 'mssql',
      dialectModule: require('tedious'), 
      port: 1433, 
      dialectOptions: {
        instanceName: 'SQLEXPRESS' 
      },
    },
  };
  