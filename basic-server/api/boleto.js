// inserirRota('/boleto',
//     function (dados, resposta) {

//         database(`INSERT INTO BOLETO(CODIGO, CARRINHO_CODIGO
//             )VALUES 
//         ("${dados.codigo}", "${dados.carrinho_codigo}")`)
//             .then(result => {
//                 alert("Tabela boleto adicionada com sucesso!")
//             }).catch(erro => {
//                 console.log('Erro ao inserir o Boleto', erro);
//             });
//     });

inserirRota('/buscar_boletos',
    function (dados, resposta) {
        console.log(dados);

        database(`SELECT * FROM BOLETO`)
            .then(result => {
                resposta({ list: result })
            }).catch(erro => {
                resposta({ erro: 'Erro ao buscar boleto!' })
            });
    }
);