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
        function openEasyPay(idConto, prezzo) {
            console.log('apertura easypay');
            // modificare l'url per le esigenze
            const easyPayOrigin = <%=request.getContextPath()%> + "/online";
            const url = easyPayOrigin + '/home/pin?idConto=' + idConto + '&prezzo=' + prezzo;
             console.log('apertura easypay: '+url);
            const easyPay = window.open(url, 'myWindow', 'width=500, height=900'); // Opens a new window
        }

        window.addEventListener('message', receiveMessage, false);

        function receiveMessage(event) {
            // controllo dell' origine per controlli di sicurezza
            // if (event.origin !== 'http://localhost:4200') return;
            console.log(event.data);
            try {
                const response = JSON.parse(event.data);
                if (response.success) {
                    document.getElementById('success').style.display = 'block';
                    document.getElementById('failed').style.display = 'none';
                } else {
                    document.getElementById('success').style.display = 'none';
                    document.getElementById('failed').style.display = 'block';
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
    EasyPay va aperto in una nuova finestra del browser tramite <var>windows.open</var> passando i parametri <b>idConto</b> e <b>prezzo</b> (valore numerico) che indicano rispettivamente l'id del commerciante e il prezzo da pagare.
    Nel mock i valori accettabili da <b>idConto</b> sono 001 e 002.
</p>

<div class="jscode">
// const idConto = '001';
// const prezzo = 30;
const easyPayOrigin = 'https://easypay-unito.herokuapp.com/';
const url = easyPayOrigin + '/home/pin?idConto=' + idConto + '&prezzo=' + prezzo;
const easyPay = window.open(url, 'myWindow', 'width=500, height=900'); // Opens a new window
</div>

<p>Si prosegue quindi ponendosi in ascolto di eventi <strong>message</strong> inviati tramite postMessage (see <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage">postMessage MDN</a>)</p>

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
        <p>Gelateria Buongustario</p>
        <p>Mario Rossi</p>
        <p>4 euro</p>
        <button onclick="openEasyPay('001', 4)">Paga</button>
    </div>
    <div class="blocco">
        <p>Pizzeria Bufalona</p>
        <p>Paolo Bianco</p>
        <p>30 euro</p>
        <button onclick="openEasyPay('002', 30)">Paga</button>
    </div>
</div>
<div id="success" style="display:none">Pagato! :)</div>
<div id="failed" style="display:none">
    <div>Pagamento fallito! :(</div>
    <div id="failed_code"></div>
</div>

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
</body>
</html>
