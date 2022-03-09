const db = require ("../db")

class Autor{
  static async selecionar(){
    const connect = await db.connect();
    return await connect.query("select * FROM autores");
  }
  static inserir(data){
    const connect = await db.connect();
    const sql = "insert into autores (nome,sobrenome, data_nascimento)values($1, $2, $3)";
    const values = [data.nome, data.sobrenome, data.datanascimento]
    return await connect.query(sql, values);
  }
  static atualizar(){
     const connect = await db.connect();
    
  }
  static deletar(){
     const connect = await db.connect();
  }
} 

module.exports = Autor;
