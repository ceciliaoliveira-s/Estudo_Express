const express = require('Express');
const app = express();
console.log (app);

    // console.log(app);

app.get('/', (request, response) => {
    response.send('Olá, Mundo!');
})    

app.listen(3000, () => {
    console.log('Servidor rodando');

})

//*

// GET: Buscar informações no back-end
// POST: Criar uma informação no back-end
// PUT/PATCH: Alterar uma informação no back-end
// DELETE: Deletar uma informação do back-end

app.get('/projects', (request, response) => {
    return response.json({
            'proj 1'
            'proj 2'
    })

});


app.post('/projects', (request, response) => {
    return response.json([
        'proj 1'
        'proj 2'
        'proj 3'
    ])
});