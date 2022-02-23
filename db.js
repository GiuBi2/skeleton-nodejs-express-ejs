let connect = function (){
 if (global.connection){
   return globa.connection.connect();
 }               
  const { Pool } = require("pg");
  const pool = new Pool ({
    connectionString: "postgres://mxkfmtzp:ePnq6AJAPL1o7LzgrPyG9t6Ax6TWIKl_@kesavan.db.elephantsql.com/mxkfmtzp"
  });

  global.connection = pool;
  return pool.connect();
}

module.exports = { connect }