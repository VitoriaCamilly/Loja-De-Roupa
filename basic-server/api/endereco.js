inserirRota('/endereco',
    function (dados, resposta) {
        console.log(dados);
        database(`INSERT INTO ENDERECO(PAIS, ESTADO, CIDADE, BAIRRO, CEP, RUA, NUMERO
            )VALUES 
        ("${dados.pais}", "${dados.estado}", "${dados.cidade}", "${dados.bairro}", "${dados.cep}", "${dados.rua}", "${dados.numero}")`)
            .then(result => {
                console.log('Endereço Inserido com Sucesso!');
                alert({ message: 'Endereço Inserido com Sucesso!' });
            }).catch(erro => {
                console.log('Erro ao inserir o Endereço!1', erro);
                alert({ erro: 'Erro ao inserir o Endereço!2' }
                );
            });
    })

inserirRota('/buscar_enderecos',
    function (dados, resposta) {
        console.log(dados);

        database(`SELECT * FROM ENDERECO`)
            .then(result => {
                resposta({ list: result })
            }).catch(erro => {
                resposta({ erro: 'Erro ao buscar endereco!' })
            });
    }
);