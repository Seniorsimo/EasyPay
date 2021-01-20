module.exports = function (app) {

  const errorSaldo = {
    "timestamp": "2021-01-12T17:28:34.610+0000",
    "status": 400,
    "error": "Bad Request",
    "message": "Fondi del cliente 1 insufficienti",
    "path": "/api/pagamenti"
  }


  app.get("/api/pagamenti", (req, res, next) => {
    res.json([]);
  });

  app.get("/api/pagamenti/:id", (req, res, next) => {
    res.json({});
  });

  app.post("/api/pagamenti", (req, res, next) => {
    if(req.body.value > 40) {
      return res.json(errorSaldo);
    }
    res.json({});
  });




}
