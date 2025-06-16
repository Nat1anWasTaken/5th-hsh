// MQTT broker configuration
const brokerConfig = {
    hostname: 'broker.emqx.io',  // Using public MQTT broker for testing
    port: 8084,
    protocol: 'wss',
    path: '/mqtt'
};

// MQTT client instance
let client = null;
let isConnected = false;

// Connect to MQTT broker
function connectMQTT() {
    const clientId = `mqtt_${Math.random().toString(16).slice(2, 10)}`;
    const connectUrl = `${brokerConfig.protocol}://${brokerConfig.hostname}:${brokerConfig.port}${brokerConfig.path}`;

    try {
        client = mqtt.connect(connectUrl, {
            clientId,
            clean: true,
            connectTimeout: 4000,
            reconnectPeriod: 1000,
        });

        client.on('connect', () => {
            console.log('Connected to MQTT broker');
            isConnected = true;
            updateConnectionStatus(true);
            // Subscribe to the shared topic
            client.subscribe('dashboard/sync', { qos: 0 });
        });

        client.on('message', (topic, payload) => {
            if (topic === 'dashboard/sync') {
                const message = JSON.parse(payload.toString());
                displayMessage(message);
            }
        });

        client.on('error', (error) => {
            console.error('MQTT error:', error);
            isConnected = false;
            updateConnectionStatus(false);
        });

        client.on('close', () => {
            console.log('MQTT connection closed');
            isConnected = false;
            updateConnectionStatus(false);
        });

    } catch (error) {
        console.error('MQTT connection error:', error);
        isConnected = false;
        updateConnectionStatus(false);
    }
}

// Update connection status in UI
function updateConnectionStatus(connected) {
    const statusElement = document.getElementById('connectionStatus');
    if (connected) {
        statusElement.textContent = 'Connected';
        statusElement.className = 'connected';
    } else {
        statusElement.textContent = 'Disconnected';
        statusElement.className = 'disconnected';
    }
}

// Display received message in UI
function displayMessage(message) {
    const messageList = document.getElementById('messageList');
    const messageElement = document.createElement('div');
    messageElement.textContent = `${message.source}: ${message.content}`;
    messageList.appendChild(messageElement);
    messageList.scrollTop = messageList.scrollHeight;
}

// Initialize MQTT connection when the page loads
window.addEventListener('load', connectMQTT); 