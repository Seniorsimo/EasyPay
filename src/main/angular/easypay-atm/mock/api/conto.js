module.exports = function (app) {

  const conti =  [
    {
        "id": 1,
        "budget": 20.0,
        "saldo": 0.0,
        "uscite": [],
        "entrate": [],
        "movimenti": [],
        "availableBudget": 20.0,
        "id_cliente": 1
    },
    {
        "id": 2,
        "budget": 20.0,
        "saldo": 0.0,
        "uscite": [],
        "entrate": [],
        "movimenti": [],
        "availableBudget": 20.0,
        "id_cliente": 2
    },
    {
        "id": 3,
        "budget": 20.0,
        "saldo": 0.0,
        "uscite": [],
        "entrate": [],
        "movimenti": [],
        "availableBudget": 20.0,
        "id_cliente": 3
    },
    {
        "id": 4,
        "budget": 20.0,
        "saldo": 0.0,
        "uscite": [],
        "entrate": [],
        "movimenti": [],
        "availableBudget": 20.0,
        "id_cliente": 4
    }
] 

app.get("/api/conti", (req, res, next) => {
  res.json(conti);
});


app.get("/api/conti/self", (req, res, next) => {
  res.json(conti.find(conto => conto.id === 4 ));
});

app.get("/api/conti/:id", (req, res, next) => {
  res.json(conti.find(conto => conto.id === 4 ));
});
}
