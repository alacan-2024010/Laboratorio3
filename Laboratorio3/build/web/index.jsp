<%-- 
    Document   : index
    Created on : 27 ago 2025, 08:58:55
    Author     : informatica
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Juego de Rompecabezas</title>
    <link rel="stylesheet" href="Styles/estiloRompeCabezas.css">
</head>

<body>
    <div class="container">
        <h1>Rompecabezas</h1>
         <img src="img/Corvette.jpg" alt="Imagen de referencia" class="imagen-referencia">
        <div id="cronometro"></div>
        <div id="puzzle"></div>
        <div id="mensaje"></div>
        <button onclick="reiniciar()">Reiniciar</button>
    </div>

    <script src="js/script.js"></script>
</body>

</html>

