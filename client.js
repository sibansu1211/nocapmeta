
io.on('connection', (socket) => {
    socket.on('send-chat-message', (roomId, message) => {
        socket.to(roomId).broadcast.emit('chat-message', {
            userId: users[socket.id],
            message: message
        });
    });
});


const chatForm = document.getElementById('chat-form');
chatForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = chatForm.querySelector('input').value;
    socket.emit('send-chat-message', roomId, message);
    
    chatForm.querySelector('input').value = '';
});


socket.on('chat-message', (data) => {
    // Display the chat message in the UI
});
