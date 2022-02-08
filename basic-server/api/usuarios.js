inserirRota('/login',
    function (dados, resposta) {
        console.log(dados);

        database(`SELECT * FROM USER WHERE NOME = "${dados.nome}" AND SENHA "${dados.senha}" LIMIT 1`) 
            .then(result => {
                console.log('result', result);
                resposta({ user: result[0]});
            }).catch(erro => {
                resposta({ erro: 'Erro ao buscar usuario!' });
            });
});

inserirRota('/buscar_usuario',
    function (dados, resposta) {
        console.log(dados);

        database(`SELECT * FROM USER`)
            .then(result => {
                resposta({ list: result })
            }).catch(erro => {
                resposta({ erro: 'Erro ao buscar usuario!' })
            });
    }
);

inserirRota('/criar_usuario',
    function name(dados, resposta) {
        console.log(dados)

        if (!dados.nome) {
            return resposta({ erro: 'é necessário preencher a tabela' })
        }

        if (!dados.nickname) {
            return resposta({ erro: 'é necessário preencher a tabela' })
        }
        // if (!dados.email) {
        //     return resposta({ erro: 'é necessário preencher a tabela' })
        // }
        // if (!dados.nascimento) {
        //     return resposta({ erro: 'é necessário preencher a tabela' })
        // }
        if (!dados.senha) {
            return resposta({ erro: 'é necessário preencher a tabela' })
        }

        database(`INSERT INTO USER (NOME, NICKNAME, SENHA) VALUES ("${dados.nome}", "${dados.nickname}", "${dados.senha}")`)
            .then(result => {
                console.log('Usuario inserido com sucesso!');
                resposta({ message: 'Usuario inserido com sucesso!' })
            }).catch(erro => {
                console.log('Erro ao inserir usuario!');
                resposta({ erro: 'Erro ao inserir usuario!' })
            });
    }
)

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