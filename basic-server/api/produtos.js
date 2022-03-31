inserirRota('/produtos',
    function (dados, resposta) {
        console.log(dados);

        if (!dados.nome) {
            return resposta({ erro: 'É necessario inserir nome' })
        }
        if (!dados.codigo) {
            return resposta({ erro: 'É necessario inserir codigo' })
        }
        if (!dados.tipo) {
            return resposta({ erro: 'É necessario inserir tipo' })
        }
        if (!dados.preco) {
            return resposta({ erro: 'É necessario inserir preco' })
        }

        database(`INSERT INTO PRODUTOS(NOME, CODIGO, TIPO, PRECO
            )VALUES 
        ("${dados.nome}", "${dados.codigo}", "${dados.tipo}", "${dados.preco}")`)
            .then(result => {
                console.log('Produto Inserido com Sucesso!');
                resposta({ message: 'Produto Inserido com Sucesso!' });
            }).catch(erro => {
                console.log('Erro ao inserir o Produto!1', erro);
                resposta({ erro: 'Erro ao inserir o Produto!2' }
                );
            });
    })


inserirRota('/buscar_produtos',
    function (dados, resposta) {
        console.log(dados);

        database(`SELECT * FROM PRODUTOS`)
            .then(result => {
                resposta({ list: result })
            }).catch(erro => {
                resposta({ erro: 'Erro ao buscar usuario!' })
            });
    }
);

inserirRota('/buscar_produtinhos',
    function (dados, resposta) {
        console.log(dados);

        database(`SELECT * FROM PRODUTOS WHERE TIPO = "${dados.tipo}"`)
            .then(result => {
                resposta({ produtinho: result})
            }).catch(erro => {
                resposta({ erro: 'Erro ao buscar usuario!' })
            });
    }
);