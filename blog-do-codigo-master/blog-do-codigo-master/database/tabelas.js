class Tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarUsuarios()
    }
    criarUsuarios() {
        const sql = 'CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(40) NOT NULL, endereco VARCHAR (40) NOT NULL, email VARCHAR(255) NOT NULL UNIQUE, senhaHash VARCHAR(255) NOT NULL)'
        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Usuarios criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas