inserirRota('/endereco',
    function (dados, resposta) {
        console.log(dados);

        if (!dados.pais) {
            return resposta({ erro: 'É necessario inserir pais' })
        }
        if (!dados.estado) {
            return resposta({ erro: 'É necessario inserir estado' })
        }
        if (!dados.cidade) {
            return resposta({ erro: 'É necessario inserir cidade' })
        }
        if (!dados.bairro) {
            return resposta({ erro: 'É necessario inserir bairro' })
        }
        if (!dados.cep) {
            return resposta({ erro: 'É necessario inserir cep' })
        }
        if (!dados.rua) {
            return resposta({ erro: 'É necessario inserir rua' })
        }
        if (!dados.numero) {
            return resposta({ erro: 'É necessario inserir numero' })
        }

        database(`INSERT INTO ENDERECO(PAIS, ESTADO, CIDADE, BAIRRO, CEP, RUA, NUMERO
            )VALUES 
        ("${dados.pais}", "${dados.estado}", "${dados.cidade}", "${dados.bairro}", "${dados.cep}", "${dados.rua}", "${dados.numero}")`)
            .then(result => {
                console.log('Endereço Inserido com Sucesso!');
                resposta({ message: 'Endereço Inserido com Sucesso!' });
            }).catch(erro => {
                console.log('Erro ao inserir o Endereço!1', erro);
                resposta({ erro: 'Erro ao inserir o Endereço!2' }
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