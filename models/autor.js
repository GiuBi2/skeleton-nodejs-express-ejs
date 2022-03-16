const db = require ("../db")

class Autor{
  static async selecionar(){
    const connect = await db.connect();
    return await connect.query("select * FROM autores");
  }
  
  static async inserir(data){
    const connect = await db.connect();
    const sql = "insert into autores (nome,sobrenome, data_nasc)values($1, $2, $3)";
    const values = [data.nome, data.sobrenome, data.data_nasc]
    return await connect.query(sql, values);
  }
  
  static async atualizar(data, id){
     const connect = await db.connect();
    const sql = "UPDATE autores SET nome=$1, sobrenome=$2, data_nasc=$3 WHERE id=$4";
     const values = [data.nome, data.sobrenome, data.data_nasc, id]
    return await connect.query(sql, values);
  }
  
  static async deletar(id){
     const connect = await db.connect();
    const sql = "DELETE FROM autores WHERE id=$1 "
    return await connect.query(sql, id);
  }
} 

module.exports = Autor;
  
