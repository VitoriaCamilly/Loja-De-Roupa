database('CREATE TABLE IF NOT EXISTS TESTE (ID INTEGER PRIMARY KEY AUTOINCREMENT, NOME varchar(30), NUMERO int)')
.then(result => {
    console.log('tabela teste criada com sucesso');
}).catch(erro => {
    console.log('tabela teste com erro');
});

database('CREATE TABLE IF NOT EXISTS TESTE (ID INTEGER PRIMARY KEY AUTOINCREMENT, NOME varchar(30), NICKNAME varchar(30), SENHA varchar(30))')
.then(result => {
    console.log('tabela teste criada com sucesso');
}).catch(erro => {
    console.log('tabela teste com erro');
});