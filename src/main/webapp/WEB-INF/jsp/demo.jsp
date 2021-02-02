<%-- 
    Document   : home
    Created on : 19-nov-2019, 19.57.51
    Author     : simo
--%>

<%@page contentType="text/html" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <title>JSP Page</title>
    <style>
        .blocco {
            display: inline-block;
            margin: 20px;
            padding: 20px;
            border: 1px solid;
        }

        .jscode {
            margin: 10px;
            white-space: pre;
            background: #555;
            color: white;
            padding: 10px;
            font-family: "Arial";
        }
    </style>

    <!--
     ##################################################################################################################
     JAVASCRIPT DELLA DEMO
     ##################################################################################################################
     -->
    <script type="text/javascript">
        // apre easyPay per pagare
        // TODO: generarlo tramite spirng
        const baseUrl = "https://easypay-unito.herokuapp.com";
        
        // NOTA: guarda la funzione getToken per dettagli sulla sicurezza
        function openEasyPay(email, password, idConto, prezzo) {
            console.log('apertura easypay');
            
            getToken(email, password, (token) => {
                // modificare l'url per le esigenze
                const easyPayOrigin = baseUrl + "/online";
                const url = easyPayOrigin + '/home/pin?idConto=' + idConto + '&prezzo=' + prezzo+ '&token=' + token;
                 console.log('apertura easypay: '+url);
                const easyPay = window.open(url, 'myWindow', 'width=500, height=900'); // Opens a new window
            });
            

        }
        
        /**
         * Restituisce il token del commerciante
         * WARNING SICUREZZA: questo metodo è semplicemente un placeholder ed 
         * una potenziale falla in sicurezza. In un contesto reale è necessario
         * un terzo server oAuth che possa garantire la comunicazione sicura
         * tra commerciante e cliente, ma ai fini di questo progetto verrà 
         * effettuata una login del commerciante e il token sarà passato 
         * ad EasyPay-online
         * @return {string}
         */
        function getToken(email, password, callback) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if(this.responseText) {
                    const res = JSON.parse(this.responseText);
                    if(res.token) {
                           callback(res.token);
                    }
                }
            }
            xhttp.open("POST", baseUrl+"/api/login", false);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify({email: email, password: password}));
            
        }

        window.addEventListener('message', receiveMessage, false);

        function receiveMessage(event) {
            // controllo dell' origine per controlli di sicurezza
            // if (event.origin !== 'http://localhost:4200') return;
            console.log(event.data);
            let response = event.data
            try {
                response = JSON.parse(event.data);
            } catch { }
            try {
                if (response.success) {
                    document.getElementById('success').style.display = 'block';
                    document.getElementById('failed').style.display = 'none';
                } else {
                    document.getElementById('success').style.display = 'none';
                    document.getElementById('failed').style.display = 'block';
                    if(response)
                    document.getElementById('failed_code').innerHTML = response.message;
                }
            } catch (e) {
                console.error(e);
            }

        }
    </script>
    <!--
     ##################################################################################################################
     END JAVASCRIPT DELLA DEMO
     ##################################################################################################################
     -->
</head>
<body>

<h1>Demo EasyPay Online</h1>

<p>
    EasyPay è una simulazione di pagamento online, ideato per la realizzazione di un progetto universitario.
</p>
<p>
    Nel  file che segue è presente un rapido tutorial che mostra l'integrazione di EasyPay Online con le proprie piattaforme di e-commerce
    Tale integrazione permette ad un cliente di una piattaforma di procedere al pagamento online sulla piattaforma prescelta.
</p>
<p>
NOTA - Attualmente, nel caso d'uso rappresentato, è attivo un solo mock con due ipotetici commercianti, ai quali due clienti  simuleranno il pagamento.
    Successivamente sarà possibile registrarsi in maniera effettiva oppure richiedere di essere inseriti nel database con il ruolo di commerciante oppure di cliente.
    (Anche i commercianti sono utenti del servizio)
</p>

<h2>Integrazione</h2>
<p>
    Il primo passo è creare un account commerciante tramite <a href="https://easypay-unito.herokuapp.com/atm">Easypay-ATM</a>
    (codice reperibile su <a href="https://github.com/gmammolo/Easypay-atm">github</a>) e prendere nota del proprio idConto.
</p>
<p>
    EasyPay-Online va aperto tramite *windows.open passando* passando tramite queryParams i seguenti parametri:
    <ul>
        <li><b>idConto</b> {string} id del conto del commerciante</li>
        <li><b>prezzo</b> {number} il prezzo da pagare.</li>
        <li><b>token</b> {string} token di autenticazione del login del commerciante.</li>
    </ul>
</p>
<p style="font-weight: 700;">
WARNING SICUREZZA: il token inserito in questa fase è semplicemente un placeholder
ed una potenziale falla in sicurezza. In un contesto reale è necessario un terzo 
server oAuth che possa garantire la comunicazione sicura tra commerciante e cliente,
ma ai fini di questo progetto verrà effettuata una login del commerciante e il token 
sarà passato ad EasyPay-online. Per semplificare ancora di più la demo il login del 
commerciante verrà svolto lato frontend ma potrebbe essere eseguito dal backend e 
restituito alla vista solo il token  
</p>

<div class="jscode">
  /* esempio di getToken per ottenere il token da utilizzare*/
  function getToken(email, password, callback) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if(this.responseText) {
              const res = JSON.parse(this.responseText);
              if(res.token) {
                      // la callback prosegue con l'apertura di EasyPayOnline
                      callback(res.token);
              }
          }
      }
      xhttp.open("POST", baseUrl+"/api/login", false);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.send(JSON.stringify({email: email, password: password}));
  }

  getToken('commerciante1@gmail.com','Qwerty1234');
</div>


<div class="jscode">
// apertura di easypay-online passando i parametri
const easyPayOrigin = 'https://easypay-unito.herokuapp.com/';
const url = easyPayOrigin + '/home/pin?idConto=' + idConto + '&prezzo=' + prezzo;
const easyPay = window.open(url, 'myWindow', 'width=500, height=900'); // Opens a new window
</div>

<p>Si prosegue quindi ponendosi in ascolto di eventi <strong>message</strong> 
    inviati tramite postMessage 
    (see <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage">postMessage MDN</a>)
</p>

<div class="jscode">
window.addEventListener('message', receiveMessage, false);

function receiveMessage(event) {
    const response = JSON.parse(event.data);
    // use response
}
</div>

La risposta ottenuta da easypay è lo stringify di un JSON.


<div class="jscode">
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
</div>

Nota: <var>errorCode</var> ed <var>errorMessage</var> sono presenti solo in caso di errore


<h2>Utilizzo di EasyPay</h2>
Se la richiesta di apertura di una istanza di pagamento è andata a buon fine, si aprirà un tab del browser che chiederà
al cliente di effettuare il login.
Come per i commercianti, in basso sono presenti i dati mock di un paio di acquirenti.

 NOTA - Attualmente sono in grado di essere effettuate due azioni principali: la fase di login e quella di pagamento. In entrambe le casistiche, è possibile procedere tramite "pin"
(con l'inserimento di una password) oppure per mezzo di qrcode (cui si evidenzia che l'NFC non è stato implementato nella seguente demo, nè si è deciso di considerare un futuro sviluppo).
    <!--
     ##################################################################################################################
     HTML DELLA DEMO
     ##################################################################################################################
     -->

<h1>Esempio (usare crtl+U per visualizzare il codice)</h1>
<div>
    <div class="blocco">
        <p>Sedie da Manager</p>
        <p>Fantozzi Ugo</p>
        <p>4 euro</p>
        <button onclick="openEasyPay('commerciante1@gmail.com','Qwerty1234', '20', 4)">Paga</button>
    </div>
    <div class="blocco">
        <p>Prodotti scolastici</p>
        <p>Rossi Ubaldo</p>
        <p>30 euro</p>
        <button onclick="openEasyPay('commerciante2@gmail.com','Qwerty1234', '21', 30)">Paga</button>
    </div>
</div>
<div id="success" style="display:none">Pagato! :)</div>
<div id="failed" style="display:none">
    <div>Pagamento fallito! :(</div>
    <div id="failed_code"></div>
</div>

<!--
<h2>Clienti</h2>
<div>
    <div class="blocco">
        <p>Paolo Pioppo</p>
        <p>id: 001</p>
        <p>pin: 0001</p>
        <p>budget: 500 &euro;</p>
        <img src="<c:url value="/img/001.png" />" width="200px" height="200px"/>
    </div>
    <div class="blocco">
        <p>Anna Dico</p>
        <p>id: 002</p>
        <p>pin: 0002</p>
        <p>budget: 2 &euro;</p>
        <img src="<c:url value="/img/002.png" />" width="200px" height="200px"/>
    </div>
</div>
-->
</body>
</html>
