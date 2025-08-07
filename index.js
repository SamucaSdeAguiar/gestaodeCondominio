const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const connetion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    data: 'controle_estoque'
})

createConnection.connect(function(err) {
    if(err) {
        console.error("Erro: ", err);
    } else {
        console.log("Conexão ok");
    }
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/cadastro', (req, res) => {
    res.sendFile(__dirname + '/cadastro.html');
});

    app.post('/cadastrar' ,(req, res) => {
        const produto = req.body.nome;
        const quantidade = req.body.quantidade;
        const preco = req.body.preco;

        const insert ='INSERT INTO produtos (produto, quantidade, preco) VALUES (?, ?, ?)';

    connetion.query(insert,[pruduto, quantidade, preco], (err, results) => {
        if (err) {
            connetion.error("Erro ao inserir produto: ", err);
            res.status(500).send('Erro ao cadastrar produto');
            return;
        } else {
            console.log("Produto inserindo com sucesso");
        }
    });
});
app.get('/atualizar/:id', (req,res) => {
    const id = req.params.id;
    const select = 'SELECT * FROM produtos WHERE id = ?';

    connetion.query(select, [id], (err, rows) => {
        if (!err && rows.length > 0) {
            const produto = rows[0];
            res.send(`
                <html>
                    <head>
                        <title>Atualizar Produto</title>
                    </head>
                    <body>
                        <h1>Atualizar Produto</h1>
                        <form action="/atualizar/${produto.id}" method="POST">
                            <label for="nome">Nome:</label>
                            <input type="text" id="nome" name="nome"
                            value="${produto.produto}" required><br><br>

                            <label for="quantidade">Quantidade:</label>
                            <input type="number" id="quantidade" name="quantidade"
                            value="${produto.quantidade}" required><br><br>

                            <label for="preco">Preco:</label>
                            <input type="number" step="0,01" id="preco" name="preco"
                            value="${produto.preco}" required><br><br>

                                <input type="submit" value="Atualizar">
                        </form>
                        <a href"/relatório">Voltaria</a>
                    </body>
                </html> 
            `);
        } else {
            res.status(404).send('Produto não encontrado');
        }
    });
});
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});