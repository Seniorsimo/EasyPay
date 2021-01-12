module.exports = function (app) {

  app.get("/api/movimenti", (req, res, next) => {
    res.json([]);
  });

  app.get("/api/movimenti/:id", (req, res, next) => {
    res.json({});
  });



}
