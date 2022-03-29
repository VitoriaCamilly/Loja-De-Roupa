// inserirRota('/carrinho',
//     function (dados, resposta) {
//         console.log(dados);

//         database(`INSERT INTO PRODUTOS(CODIGO, QTDD, PRECOFINAL, PRODUTOS_CODIGO
//             )VALUES 
//         ("${dados.qtdd}", "${dados.tipo}", "${dados.preco}")`)
//             .then(result => {
//                 console.log('Carrinho Inserido com Sucesso!');
//                 resposta({ message: 'Carrinho Inserido com Sucesso!' });
//             }).catch(erro => {
//                 console.log('Erro ao inserir o Carrinho!1', erro);
//                 resposta({ erro: 'Erro ao inserir o Carrinho!2' }
//                 );
//             });
//     })