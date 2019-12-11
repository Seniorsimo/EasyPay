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
    </style>

    <script type="text/javascript">
        // apre easyPay per pagare
        function openEasyPay(idConto, prezzo) {
            console.log('apertura easypay');
            // modificare l'url per le esigenze
            const easyPayOrigin = "/easypay-online";
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
</head>
<body>
<h1>Esempio di Utilizzo</h1>
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
