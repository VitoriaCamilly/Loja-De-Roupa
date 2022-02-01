inserirRota('/buscar_usuario', function (dados, resposta){
    console.log(dados);

    resposta({ok:"Requisição efetuada com sucesso!"});
});

inserirRota('/criar_usuario',
function name(dados, resposta) {
    console.log(dados)

    if (!dados.nome) {
        return resposta({erro: 'é necessário preencher a tabela'})
    } 

    if (!dados.nickname) {
        return resposta({erro: 'é necessário preencher a tabela'})
    }

database (`INSERT INTO USER (NOME, NICKNAME) VALUES ("${dados.nome}", "${dados.nickname}")`)
.then(result => {
    console.log('Usuario inserido com sucesso!');
    resposta({message: 'Usuario inserido com sucesso!'})
}).catch(erro => {
    console.log('Erro ao inserir usuario!');
    resposta({erro:'Erro ao inserir usuario!'})
});

})