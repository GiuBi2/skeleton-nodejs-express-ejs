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
  
  static async atualizar(){
     const connect = await db.connect();
    
  }
  static async deletar(){
     const connect = await db.connect();
  }
} 

module.exports = Autor;

