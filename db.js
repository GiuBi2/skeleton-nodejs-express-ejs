let connect = function (){
 if (global.connection){
   return global.connection.connect();
 }               
  const { Pool } = require("pg");
  const pool = new Pool ({
    connectionString: "postgres://pgxdbpnf:Mrx0jn7ITMqSIb_wvhIm9anYE8ShyJ0G@kesavan.db.elephantsql.com/pgxdbpnf"
  });

  global.connection = pool;
  return pool.connect();
}

module.exports = { connect }