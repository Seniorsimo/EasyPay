const clienti = {
  '001': {
    id: '001',
    pin: '0001',
    token: '0001',
    nome: 'Paolo Pioppo',
    budget: 5000,
  },
  '002': {
    id: '002',
    pin: '0002',
    token: '0002',
    nome: 'Anna Dico',
    budget: 2,
  }
}

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
  if(req.body) {
    const cliente = clienti[req.body.idCliente];
    const commerciante = commercianti[req.body.idCommerciante];
    const prezzo = req.body.prezzo;
    if ( cliente && commerciante && prezzo ) {
      if(prezzo <= cliente.budget ) {
        res.json({ success: true }   );
      } else {
        res.json({ success: false, error: {id: 'NO_MONEY', message: 'saldo insufficiente'} }   );
      }
    }
  } else {
    res.json({ success: false, error: {id: 'GENERAL_ERROR', message: 'impossibile effettuare il pagamento'} }   );
  }

};
