module.exports = function (app) {


  const users = [
    {
        "id": 1,
        "otp": "453422",
        "pin": "1234",
        "nome": "Paolo",
        "cognome": "Pioppo",
        "cf": "ASDFGHJKLPOIUYTRE",
        "phone": "+390123456789",
        "address": "Via Rossi",
        "createdAt": "2021-01-08T11:59:42.943+0000",
        "updatedAt": "2021-01-08T11:59:42.943+0000",
        "birth_date": "23/11/1983",
        "id_conto": 1,
        "email": "user1@gmail.com",
        "type": "cliente"
    },
    {
        "id": 2,
        "otp": "328566",
        "pin": "1234",
        "nome": "Anna",
        "cognome": "Dico",
        "cf": "SNHFAIHCFIUHFCUHACUHND",
        "phone": "+390123456789",
        "address": "Viale dei fiori",
        "createdAt": "2021-01-08T11:59:43.487+0000",
        "updatedAt": "2021-01-08T11:59:43.487+0000",
        "birth_date": "23/11/1993",
        "id_conto": 2,
        "email": "user2@gmail.com",
        "type": "cliente"
    },
    {
        "id": 3,
        "otp": "235778",
        "pin": "1234",
        "nome": "Ababua",
        "cognome": "Bau",
        "cf": "SNHFAIHCFIUHFHSYDCUHND",
        "phone": "+390123456789",
        "address": "Strada grande",
        "createdAt": "2021-01-08T11:59:43.699+0000",
        "updatedAt": "2021-01-08T11:59:43.699+0000",
        "ragSoc": "Pizzeria Mare Blu",
        "piva": "SHKVIYNGARCNIYHCFAIHIANHAI",
        "birth_date": "23/11/1989",
        "type": "commerciante",
        "id_conto": 3,
        "email": "user3@gmail.com"
    },
    {
        "id": 4,
        "otp": "971352",
        "pin": "1234",
        "nome": "Ciro",
        "cognome": "Blu",
        "cf": "SNHFDLKKLIUHFCUHACUHND",
        "phone": "+390123456789",
        "address": "Corso Napoleone",
        "createdAt": "2021-01-08T11:59:43.913+0000",
        "updatedAt": "2021-01-08T11:59:43.913+0000",
        "ragSoc": "Osteria Bella Napoli",
        "piva": "SHKVIYNGAHABFKHKFYAHIYYNHAI",
        "birth_date": "23/11/2001",
        "type": "commerciante",
        "id_conto": 4,
        "email": "user4@gmail.com"
    }
]

  app.get("/api/clienti", (req, res, next) => {
    res.json(users);
  });

  app.get("/api/clienti/self", (req, res, next) => {
    res.json(users[0]);
  });

  app.get("/api/clienti/:id", (req, res, next) => {
    const otp = req.query.opt;
    const pin = req.query.pin;

    const validUsers = users.filter(user => user.id+"" === req.params.id && ( user.otp === otp || user.pin === pin));
    if(validUsers.length > 1) {
      res.json(validUsers[0]);
    } else {
      res.status(400);
      res.json(
        {
          "type": "INVALID_REQUEST",
          "message": "Invalid request",
          "timestamp": 1610107795531
        }
      )
    }

  });


  app.post("/api/clienti", (req, res, next) => {
    if(users.findIndex(user => user.email === req.body.email) > -1) {
      res.status(400).json({
        "type": "USERNAME_TAKEN",
        "message": `Username ${req.body.email} was already taken`,
        "timestamp": Date.now()
    });
    return;
    }
    res.json(users);
  });

};
