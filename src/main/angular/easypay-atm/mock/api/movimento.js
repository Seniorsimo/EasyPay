module.exports = function (app) {

  const movimenti = [
    {
        "id": 12,
        "valore": 1.0,
        "timestamp": "2021-01-14T11:19:41.934",
        "type": "pagamento",
        "from": 1,
        "from_name": "Pioppo Paolo",
        "to": 3,
        "to_name": "Pizzeria Mare Blu"
    },
    {
        "id": 10,
        "valore": 1.0,
        "timestamp": "2021-01-14T11:16:59.739",
        "type": "pagamento",
        "from": 1,
        "from_name": "Pioppo Paolo",
        "to": 3,
        "to_name": "Pizzeria Mare Blu"
    },
    {
        "id": 9,
        "valore": 30.0,
        "timestamp": "2021-01-13T21:44:32.007",
        "id_atm": 1,
        "type": "ricarica",
        "from": null,
        "from_name": null,
        "to": 1,
        "to_name": "Pioppo Paolo"
    },
    {
        "id": 8,
        "valore": 40.0,
        "timestamp": "2021-01-13T21:44:25.92",
        "id_atm": 1,
        "type": "ricarica",
        "from": null,
        "from_name": null,
        "to": 1,
        "to_name": "Pioppo Paolo"
    },
    {
        "id": 3,
        "valore": 100.0,
        "timestamp": "2021-01-13T21:43:00.593",
        "id_atm": 1,
        "type": "ricarica",
        "from": null,
        "from_name": null,
        "to": 1,
        "to_name": "Pioppo Paolo"
    },
    {
        "id": 1,
        "valore": 100.0,
        "timestamp": "2021-01-13T19:04:18.94",
        "id_atm": 1,
        "type": "ricarica",
        "from": null,
        "from_name": null,
        "to": 1,
        "to_name": "Pioppo Paolo"
    }
]

  app.get("/api/movimenti", (req, res, next) => {
    res.json(movimenti);
  });

}
