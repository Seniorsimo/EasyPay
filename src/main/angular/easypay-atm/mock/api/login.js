module.exports = function (app) {
  app.post("/api/login", (req, res, next) => {
    res.json({
      token:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MTczMDQ4ODYsImlhdCI6MTYxMDEwNDg4NiwidXNlcm5hbWUiOiJ1c2VyMUBnbWFpbC5jb20ifQ.T0p3KjNUZ_ggFaxH2kDWBNyTDSIHcz7qGAt-gF0q914",
    });
  });

  //other routes..
};
