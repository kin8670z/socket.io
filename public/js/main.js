$(function () {

    let socket = io();
    socket.emit('message','hello')
});