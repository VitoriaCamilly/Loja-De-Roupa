inserirRota('/cartao',
    function (dados, resposta) {

        database(`INSERT INTO CARTAO(NUMCARTAO, MESVALIDADE, ANOVALIDADE, CODIGOSEGURANCA, NOMECARTAO, CLIENTE_EMAIL, CARRINHO_CODIGO
            )VALUES 
        ("${dados.numCartao}", "${dados.mesValidade}", "${dados.anoValidade}", "${dados.codigoSeguranca}", "${dados.nomeCartao}", "${dados.cliente_email}", "${dados.carrinho_codigo}")`)
            .then(result => {
                alert("Cartão adicionado com sucesso!")
            }).catch(erro => {
                alert('Erro ao inserir o Cartão');
            });
    });

inserirRota('/buscar_cartao',
    function (dados, resposta) {
        console.log(dados);
        database(`SELECT * FROM CARTAO`)
            .then(result => {
                resposta({ list: result })
            }).catch(erro => {
                resposta({ erro: 'Erro ao buscar Cartao!' })
            });
    }
);


// NUMCARTAO CHAR(16) NOT NULL PRIMARY KEY,
//     MESVALIDADE INT NOT NULL,
//     ANOVALIDADE INT NOT NULL,
//     CODIGOSEGURANCA CHAR(3),
//     NOMECARTAO VARCHAR(50),
//     CLIENTE_EMAIL VARCHAR(100) NOT NULL,
//     CARRINHO_CODIGO INT NOT NULL,
//     ENDERECO_CEP VARCHAR(100) NOT NULL,
//     FOREIGN KEY (CARRINHO_CODIGO)
//     REFERENCES CARRINHO (CODIGO),
//     FOREIGN KEY (CLIENTE_EMAIL)
//     REFERENCES CLIENTE (EMAIL),
//     FOREIGN KEY (ENDERECO_CEP)
//     REFERENCES ENDERECO (CEP)