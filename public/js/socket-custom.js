var socket = io();
//escuchar suscesos
socket.on('connect', function() {
    console.log('Conectado al servidor');

});

socket.on('disconnect', function() {
    console.log('Perdimos coneccion con el servidor');
});


//Enviar informacion al servidor
socket.emit('enviarMensaje', {
    usuario: 'ever',
    mensaje: 'hola mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});

//Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});