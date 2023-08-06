// server.js
io.on('connection', (socket) => {
    socket.on('send-chat-message', (roomId, message) => {
        socket.to(roomId).broadcast.emit('chat-message', {
            userId: users[socket.id],
            message: message
        });
    });
});

// client.js
// Emit chat messages
const chatForm = document.getElementById('chat-form');
chatForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = chatForm.querySelector('input').value;
    socket.emit('send-chat-message', roomId, message);
    // Clear input field
    chatForm.querySelector('input').value = '';
});

// Display received chat messages
socket.on('chat-message', (data) => {
    // Display the chat message in the UI
});
