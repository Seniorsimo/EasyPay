module.exports = function (app) {
  const ricariche = [
    {
      id: 1,
      valore: 1.0,
      timestamp: "2021-01-12T17:40:36.327",
      id_atm: 1,
      type: "ricarica",
      to: 3,
      to_name: "Pizzeria Mare Blu",
      from_name: null,
      from: null,
    },
    {
      id: 2,
      valore: 1.0,
      timestamp: "2021-01-12T17:41:34.569",
      id_atm: 1,
      type: "ricarica",
      to: 1,
      to_name: "Pioppo Paolo",
      from_name: null,
      from: null,
    },
  ];

  const errorSaldo = {
    timestamp: "2021-01-12T17:28:34.610+0000",
    status: 400,
    error: "Bad Request",
    message: "Fondi del cliente 1 insufficienti",
    path: "/api/pagamenti",
  };

  app.get("/api/ricariche", (req, res, next) => {
    res.json([]);
  });

  app.get("/api/ricariche/:id", (req, res, next) => {
    res.json(ricariche.find(ric => ric.id+"" === req.params.id+""));
  });

  app.post("/api/ricariche", (req, res, next) => {
    if (req.body.value > 40) {
      return res.json(errorSaldo);
    }
    res.json({});
  });
};
