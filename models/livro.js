const db = require ("../db")

class Livro{
  static async selecionar(){
    const connect = await db.connect();
    return await connect.query("select * FROM livros");
  }
  
  static async inserir(data){
    const connect = await db.connect();
    const sql = "insert into livros (autor_id,titulo, editora,data_publicacao,preco)values($1, $2, $3, $4, $5)";
    const values = [data.autor_id, data.titulo, data.editora, data.data_publicacao, data.preco]
    return await connect.query(sql, values);
  }
  
  static async atualizar(data){
     const connect = await db.connect();
    const sql = "UPDATE livros SET autor_id=$1, titulo=$2, editora=$3, data_publicacao=$4, preco=$5 WHERE id=$6";
     const values = [data.autor_id, data.titulo, data.editora, data.data_publicacao, data.preco, data.id]
    return await connect.query(sql, values);
  }
  
  static async deletar(id){
     const connect = await db.connect();
    const sql = "DELETE FROM livros WHERE id=$1 ";
    const values = [data.id]
    return await connect.query(sql,values);
  }
} 

module.exports = Livro;

