const commercianti = {
  '001': {
    idConto: '001',
    nome: 'Mario Rossi',
    nomenclatura: 'Gelateria Buongustario',
  },
  '002': {
    idConto: '002',
    nome: 'Paolo Bianco',
    nomenclatura: 'Pizzeria Bufalona',
  }
}

module.exports = function(req, res, log, next) {
  if(req.query && commercianti[req.query.idConto]) {
    res.json({ success: true, body: commercianti[req.query.idConto] }   );
  } else {
    res.json({ success: false, error: {id: 'NO_COUNT', message: 'conto del commerciante non trovato'} }   );
  }

};
