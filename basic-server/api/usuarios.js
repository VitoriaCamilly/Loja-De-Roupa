inserirRota('/login',
    function (dados, resposta) {
        console.log(dados);

        database(`SELECT * FROM CLIENTE WHERE EMAIL = "${dados.email}" AND SENHA = "${dados.senha}" LIMIT 1`)
            .then(result => {
                console.log('result', result);
                resposta({ cliente: result[0] });
            }).catch(erro => {
                resposta({ erro: 'Erro ao buscar usuario!' });
            });
    });


inserirRota('/buscar_usuario',
    function (dados, resposta) {
        console.log(dados);

        database(`SELECT * FROM CLIENTE`)
            .then(result => {
                resposta({ list: result })
            }).catch(erro => {
                resposta({ erro: 'Erro ao buscar usuario!' })
            });
    }
);

inserirRota('/criar_usuario',
    function (dados, resposta) {
        console.log(dados);


        if (!dados.nome) {
            return resposta({ erro: 'É necessario inserir nome' })
        }
        if (!dados.nascimento) {
            return resposta({ erro: 'É necessario inserir nascimento' })
        }
        if (!dados.senha) {
            return resposta({ erro: 'É necessario inserir password' })
        }
        if (!dados.email) {
            return resposta({ erro: 'É necessario inserir email' })
        }


        database(`INSERT INTO CLIENTE(NOME,
        EMAIL, SENHA, NASCIMENTO
            )VALUES 
        ("${dados.nome}", "${dados.email}", "${dados.senha}", "${dados.nascimento}")`)
            .then(result => {
                console.log('Usuario Inserido com Sucesso!');
                resposta({ message: 'Usuario Inserido com Sucesso!' });
            }).catch(erro => {
                console.log('Erro ao inserir o Usuario!', erro);
                resposta({ erro: 'Erro ao inserir o Usuario!' }
                );
            });
    })

// fetch('/api/login',
//     {
//         method: 'POST   ',
//         body: JSON.stringify(
//             {
//                 nome: "Camilly", sobrenome: "Vitoria", senha: '123'//this.password
//             }
//         ),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }
// ).then(function(result){
//     return result.json();
// }).then(function(dados){
//     if(dados.list.length == 1) {
//         console.log(dados);
//         alert("Login Efetuado");
//     } else {
//         alert("Login Incorreto");
//     }
// }).catch(function(erro){
//     console.log(erro);
// })