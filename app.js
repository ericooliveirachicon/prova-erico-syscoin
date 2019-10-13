const express = require('express');
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/provasyscoin', (req, res) => {
    const response = {};

    if (req.query.user === 'syscoin' && req.query.password === 'meEscolhe') {
        response.mensagem = 'Meu nome completo é Érico Oliveira Chicon Silva. Eu quero essa vaga!';
    } else {
        response.mensagem = 'Credenciais erradas.';
    }
    res.json(response);
});

app.listen(process.env.PORT || 3000);