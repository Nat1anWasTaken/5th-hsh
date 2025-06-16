# MQTT Dashboard System

A simple real-time dashboard system using MQTT for message synchronization between two web interfaces.

## Features

- Real-time message synchronization between two dashboards
- Clean, modern UI with status indicators
- Connection status display
- Message history with auto-scroll
- Support for Enter key to send messages
- Uses public MQTT broker for testing

## File Structure

```
homework3/
├── README.md
├── dashboard1.html
├── dashboard2.html
├── style.css
├── mqtt-client.js
├── dashboard1.js
└── dashboard2.js
```

## Quick Start

1. Start a local web server in the project directory:
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # OR using Python 2
   python -m SimpleHTTPServer 8000
   ```

2. Open the dashboards in your web browser:
   - Dashboard 1: http://localhost:8000/dashboard1.html
   - Dashboard 2: http://localhost:8000/dashboard2.html

## Testing the System

1. Open both dashboard URLs in separate browser windows or tabs
2. Wait for both dashboards to show "Connected" status
3. Type a message in either dashboard's input field
4. Press Enter or click "Send Message"
5. The message should appear in both dashboards with the source indicated

## Technical Details

- Uses MQTT over WebSocket (WSS) protocol
- Connects to the public MQTT broker at broker.emqx.io
- Messages are published to the 'dashboard/sync' topic
- Each message includes:
  - Source dashboard identifier
  - Message content
  - Timestamp

## Browser Support

The system works in modern browsers that support:
- WebSocket
- ES6 JavaScript
- CSS Grid and Flexbox

## Security Note

This implementation uses a public MQTT broker for demonstration purposes. For production use, you should:
- Use a private MQTT broker
- Implement proper authentication
- Use SSL/TLS for secure communication
- Add message validation and sanitization 