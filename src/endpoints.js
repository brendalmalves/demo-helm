
module.exports = function (app) {

    app.get('/', (req, res) => {
       res.status(200).send('Aplicação base para demo sobre Helm');
    })
}