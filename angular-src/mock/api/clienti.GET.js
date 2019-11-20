const clienti = {
  '0010001': {
    id: '001',
    pin: '0001',
    token: '0001',
    nome: 'Paolo Pioppo',
    budget: 5000,
  },
  '0020002': {
    id: '002',
    pin: '0002',
    token: '0002',
    nome: 'Anna Dico',
    budget: 2,
  }
}

module.exports = function(req, res, log, next) {
  const id = (req.query.id + req.query.pin) || req.query.token;
  if (req.query && clienti[id]) {
    res.json({ success: true, body: clienti[id] }   );
  } else {
    res.json({ success: false, error: {id: 'NO_COUNT', message: 'conto dell\'utente non trovato'} }   );
  }
};
