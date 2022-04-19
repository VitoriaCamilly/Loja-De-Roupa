inserirRota('/carrinho',
    function (dados, resposta) {
        console.log(dados);
        database(`INSERT INTO CARRINHO(QTDD, PRECOFINAL, EMAIL_CLIENTE, PRODUTOS_CODIGO
            )VALUES 
        ("${dados.qtdd}", "${dados.precofinal}", "${dados.email_cliente}","${dados.produtos_codigo}")`)
            .then(result => {
                console.log('Carrinho Inserido com Sucesso!');
            }).catch(erro => {
                console.log('Erro ao inserir o Carrinho!1', erro); 
            });
});

inserirRota('/buscar_carrinho',
function (dados, resposta) {
    console.log(dados);
    database(`SELECT * FROM CARRINHO`)
        .then(result => {
            resposta({ list: result })
        }).catch(erro => {
            resposta({ erro: 'Erro ao buscar carrinho!' })
        });
});

inserirRota('/checar_carrinho', function(dados, resposta) {
    database(`SELECT * FROM CARRINHO WHERE EMAIL_CLIENTE = "${dados.email_cliente}"`)
        .then(result => {
            resposta(result)
        }).catch(erro => {
            console.log('ERRO AO CHECAR USUÁRIO! ')
            resposta({ erro })
        })
})

inserirRota('/checar_produto', function(dados, resposta) {
    database(`SELECT * FROM CARRINHO WHERE PRODUTOS_CODIGO = "${dados.produtos_codigo}"`)
        .then(result => {
            resposta(result)
        }).catch(erro => {
            console.log('ERRO AO CHECAR produto! ')
            resposta({ erro })
        })
})