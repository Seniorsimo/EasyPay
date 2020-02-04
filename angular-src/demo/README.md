# EASYPAY DEMO
Un semplice file di demo utilizzato per mostrare come implementare correttamente easyPay.

In seguito saranno presenti i passaggi fondamentali, mentre in index.html è presente un esempio completo di implementazione.

EasyPay va aperto tramite windows.open passando i parametri **idConto** e **prezzo** (valore numerico) che indicano rispettivamente l'id del commerciante e il prezzo da pagare.

Nel mock i valori accettabili da idConto sono 001 e 002.

```js
const easyPayOrigin = 'http://localhost:4200';
const url = easyPayOrigin + '/home/pin?idConto=' + idConto + '&prezzo=' + prezzo;
const easyPay = window.open(url, 'myWindow', 'width=500, height=900'); // Opens a new window
```


per la ricezione del risultato invece si utilizza postMessage
(see [postMessage MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) )

```js
window.addEventListener('message', receiveMessage, false);

function receiveMessage(event) {
  const response = JSON.parse(event.data);

}
```

La risposta ottenuta da easypay è un JSON stringifato.
il suo contenuto è: 
```typescript
interface Response {
  /** true in caso di successo durante il pagamento, false con esito negativo */
  success: boolean;
  /** codice dell' errore in caso di fallimento  */
  errorCode?: string;
  /** messaggio dell' errore ottenuto durante il pagamento*/
  errorMessage?: string;
  /** data di avvenuto pagamento */
  timestamp: number;
}
```

## Dati del Mock


```js
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
```


```js
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
```
