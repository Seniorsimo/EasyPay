<%-- 
    Document   : map
    Created on : 25-gen-2021, 15.02.59
    Author     : simo
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE HTML>

<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title>Map</title>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
              integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
              crossorigin=""/>
        <style>
            body {
                padding: 0;
                margin: 0;
            }
            html, body, #map {
                height: 100%;
                width: 100vw;
            }
        </style>
        <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
                integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
        crossorigin=""></script>
    </head>
    <body>
        <div id="map"></div>
        <script type="text/javascript">
//            var map = L.map('map').fitWorld();
            var map = L.map('map');

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                tileSize: 512,
//                id: 'mapbox/streets-v11',
                zoomOffset: -1
            }).addTo(map);

            //map.locate({setView: true, maxZoom: 16});
            map.setView([
            ${model.self.lat},
            ${model.self.lon}
            ], 14);
            L.marker({lat: ${model.self.lat}, lon: ${model.self.lon}}).addTo(map).bindPopup("${model.self.name}");
            
            <c:forEach var="point" items="${model.points}">
            L.marker({lat: ${point.lat}, lon: ${point.lon}}).addTo(map).bindPopup("${point.name}");
            </c:forEach>

            function onLocationFound(e) {
                var radius = e.accuracy;

                L.marker(e.latlng).addTo(map).bindPopup("You are within " + radius + " meters from this point").openPopup();

                L.circle(e.latlng, radius).addTo(map);
            }

            map.on('locationfound', onLocationFound);

            function onLocationError(e) {
                alert(e.message);
            }

            map.on('locationerror', onLocationError);
        </script>
    </body>
</html>
