// Dashboard 2 specific functionality
function sendMessage() {
    if (!isConnected) {
        alert('Not connected to MQTT broker');
        return;
    }

    const messageInput = document.getElementById('messageInput');
    const message = {
        source: 'Dashboard 2',
        content: messageInput.value,
        timestamp: new Date().toISOString()
    };

    client.publish('dashboard/sync', JSON.stringify(message), { qos: 0 });
    messageInput.value = '';
}

// Handle Enter key press in input field
document.getElementById('messageInput').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
}); 