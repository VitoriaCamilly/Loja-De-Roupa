
database(`CREATE TABLE IF NOT EXISTS CLIENTE(
    EMAIL VARCHAR(100) NOT NULL PRIMARY KEY,
    NOME VARCHAR(50) NOT NULL,
    SENHA VARCHAR(30) NOT NULL,
    NASCIMENTO DATE NOT NULL
    )`).then(result => {
    console.log('Tabela CLIENTE Criada com Sucesso');
    //resposta({ resposta: 'TABELA CRIADA' });
}).catch(erro => {
    console.log('Tabela Com Erro');
    //resposta({ resposta: erro });
});

database(`CREATE TABLE IF NOT EXISTS ENDERECO(
    CEP CHAR(8) NOT NULL PRIMARY KEY,
    RUA VARCHAR(100) NOT NULL, 
    NUMERO INT,
    BAIRRO VARCHAR(100) NOT NULL,
    CIDADE VARCHAR(100) NOT NULL,
    ESTADO VARCHAR(100) NOT NULL,
    PAIS VARCHAR(50) NOT NULL
    )`).then(result => {
    console.log('Tabela ENDERECO Criada com Sucesso');
    //resposta({ resposta: 'TABELA CRIADA' });
}).catch(erro => {
    console.log('Tabela Com Erro');
    //resposta({ resposta: erro });
});


database(`CREATE TABLE IF NOT EXISTS PRODUTOS (
    CODIGO INT NOT NULL PRIMARY KEY,
    NOME VARCHAR(50) NOT NULL,
    TIPO VARCHAR(30) NOT NULL,
    PRECO VARCHAR(30) NOT NULL,
    URL VARCHAR(300) NOT NULL
    )`).then(result => {
    console.log('Tabela Produto Criada com Sucesso');
    //resposta({ resposta: 'TABELA CRIADA' });
}).catch(erro => {
    console.log('Tabela Com Erro');
    //resposta({ resposta: erro });
});

// database(`CREATE TABLE IF NOT EXISTS CARRINHO (
//     CODIGO INT NOT NULL PRIMARY KEY AUTOINCREMENT,
//     QTDD INT NOT NULL,
//     PRECOFINAL DOUBLE NOT NULL,
//     PRODUTOS_CODIGO INT NOT NULL,
//     FOREIGN KEY (PRODUTOS_CODIGO)
//     REFERENCES PRODUTOS (CODIGO)
//     ON UPDATE CASCADE
//     ON DELETE CASCADE
//     )`).then(result => {
//     console.log('Tabela CARRINHO Criada com Sucesso');
//     //resposta({ resposta: 'TABELA CRIADA' });
// }).catch(erro => {
//     console.log('Tabela Com Erro');
//     //resposta({ resposta: erro });
// });

database(`CREATE TABLE IF NOT EXISTS BOLETO (
    CODIGO CHAR(48) NOT NULL PRIMARY KEY,
    CARRINHO_CODIGO INT NOT NULL,
    FOREIGN KEY (CARRINHO_CODIGO)
    REFERENCES CARRINHO (CODIGO)
    )`).then(result => {
    console.log('Tabela BOLETO Criada com Sucesso');
    //resposta({ resposta: 'TABELA CRIADA' });
}).catch(erro => {
    console.log('Tabela Com Erro');
    //resposta({ resposta: erro });
});

// database(`CREATE TABLE IF NOT EXISTS CARTAO (
//     NUMCARTAO CHAR(16) NOT NULL PRIMARY KEY,
//     MESVALIDADE INT NOT NULL,
//     ANOVALIDADE INT NOT NULL,
//     CODIGOSEGURANCA CHAR(3),
//     NOMECARTAO VARCHAR(50),
//     CARRINHO_CODIGO INT NOT NULL,
//     FOREIGN KEY (CARRINHO_CODIGO)
//     REFERENCES CARRINHO (CODIGO)
//     ON UPDATE CASCADE
//     ON DELETE CASCADE,
//     CLIENTE_EMAIL VARCHAR(100) NOT NULL,
//     FOREIGN KEY (CLIENTE_CODIGO)
//     REFERENCES CLIENTE (CODIGO)
//     ON UPDATE CASCADE
//     ON DELETE CASCADE,
//     ENDERECO_CEP VARCHAR(100) NOT NULL,
//     FOREIGN KEY (ENDERECO_CEP)
//     REFERENCES ENDERECO (CEP)
//     ON UPDATE CASCADE
//     ON DELETE CASCADE
//     )`).then(result => {
//     console.log('Tabela CARTAO Criada com Sucesso');
//     //resposta({ resposta: 'TABELA CRIADA' });
// }).catch(erro => {
//     console.log('Tabela Com Erro');
//     //resposta({ resposta: erro });
// });


