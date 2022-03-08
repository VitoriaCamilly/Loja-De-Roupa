
database(`CREATE TABLE IF NOT EXISTS CLIENTE(
    EMAIL VARCHAR(100) NOT NULL PRIMARY KEY,
    NOME VARCHAR(50) NOT NULL,
    SENHA VARCHAR(30) NOT NULL,
    NASCIMENTO DATE NOT NULL
    )`).then(result => {
    console.log('Tabela Criada com Sucesso');
    //resposta({ resposta: 'TABELA CRIADA' });
}).catch(erro => {
    console.log('Tabela Com Erro');
    //resposta({ resposta: erro });
});

// database(`CREATE TABLE IF NOT EXISTS IMAGENS(
//     CODIGO INT NOT NULL PRIMARY KEY AUTOINCREMENT,
//     SRC VARCHAR(200) NOT NULL,
//     )`).then(result => {
//     console.log('Tabela Criada com Sucesso');
//     //resposta({ resposta: 'TABELA CRIADA' });
// }).catch(erro => {
//     console.log('Tabela Com Erro');
//     //resposta({ resposta: erro });
// });
// database(`CREATE TABLE IF NOT EXISTS PRODUTOS (
//     CODIGO INT NOT NULL PRIMARY KEY AUTOINCREMENT,
//     NOME VARCHAR(50) NOT NULL,
//     TIPO VARCHAR(30) NOT NULL,
//     PRECO VARCHAR(30) NOT NULL,
//     CODIGO_IMAGENS INT NOT NULL,
//     FOREIGN KEY (CODIGO_IMAGENS)
//     REFERENCES IMAGENS (CODIGO)
//     ON UPDATE CASCADE
//     ON DELETE CASCADE
//     )`).then(result => {
//     console.log('Tabela Criada com Sucesso');
//     //resposta({ resposta: 'TABELA CRIADA' });
// }).catch(erro => {
//     console.log('Tabela Com Erro');
//     //resposta({ resposta: erro });
// });
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
//     console.log('Tabela Criada com Sucesso');
//     //resposta({ resposta: 'TABELA CRIADA' });
// }).catch(erro => {
//     console.log('Tabela Com Erro');
//     //resposta({ resposta: erro });
// });
// database(`CREATE TABLE IF NOT EXISTS PAGAMENTO (
//     CODIGO INT NOT NULL PRIMARY KEY AUTOINCREMENT,
//     NUMCARTAO CHAR(16),
//     BOLETO varchar(48),
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
//     )`).then(result => {
//     console.log('Tabela Criada com Sucesso');
//     //resposta({ resposta: 'TABELA CRIADA' });
// }).catch(erro => {
//     console.log('Tabela Com Erro');
//     //resposta({ resposta: erro });
// });

// database('CREATE TABLE IF NOT EXISTS TESTE (ID INTEGER PRIMARY KEY AUTOINCREMENT, NOME varchar(30), NUMERO int)')
// .then(result => {
//     console.log('tabela teste criada com sucesso');
// }).catch(erro => {
//     console.log('tabela teste com erro');
// });

// database('CREATE TABLE IF NOT EXISTS TESTE (ID INTEGER PRIMARY KEY AUTOINCREMENT, NOME varchar(30), NICKNAME varchar(30), SENHA varchar(30))')
// .then(result => {
//     console.log('tabela teste criada com sucesso');
// }).catch(erro => {
//     console.log('tabela teste com erro');
// });

// database(`CREATE TABLE IF NOT EXISTS USER (
//     ID INTEGER PRIMARY KEY AUTOINCREMENT,
//     NOME VARCHAR(50),
//     EMAIL varchar(30),
//     SENHA varchar(30)
//     )`).then(result => {
//     console.log('Tabela Criada com Sucesso');
//     //resposta({ resposta: 'TABELA CRIADA' });
// }).catch(erro => {
//     console.log('Tabela Com Erro');
//     //resposta({ resposta: erro });
// });
