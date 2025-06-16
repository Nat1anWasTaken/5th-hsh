// Replace with your actual API key
const API_KEY = 'xx';
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

const userInput = document.getElementById('userInput');
const submitBtn = document.getElementById('submitBtn');
const loadingDiv = document.getElementById('loading');
const responseDiv = document.getElementById('response');

// Configure marked options for security
marked.setOptions({
    headerIds: false,
    mangle: false,
    headerPrefix: '',
    breaks: true,
    gfm: true,
    sanitize: true
});

async function getPlantAdvice(prompt) {
    try {
        loadingDiv.classList.remove('hidden');
        responseDiv.innerHTML = '';

        const response = await fetch(`${API_URL}?key=${API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `As a plant care expert, please provide advice for the following question or description. Format your response using Markdown for better readability: ${prompt}\n\nPlease include:\n- Specific care instructions\n- Potential issues to watch for\n- Best practices\n\nUse Markdown formatting like headers, lists, and emphasis where appropriate.`
                    }]
                }]
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('API Response:', data); // For debugging

        if (data.candidates && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0].text) {
            const advice = data.candidates[0].content.parts[0].text;
            // Convert Markdown to HTML and set it safely
            responseDiv.innerHTML = marked.parse(advice);
        } else {
            throw new Error('Invalid response format');
        }
    } catch (error) {
        responseDiv.innerHTML = marked.parse(`**Error:** ${error.message}\n\nPlease try again later.`);
        console.error('Detailed error:', error);
    } finally {
        loadingDiv.classList.add('hidden');
    }
}

submitBtn.addEventListener('click', () => {
    const prompt = userInput.value.trim();
    if (prompt) {
        getPlantAdvice(prompt);
    } else {
        responseDiv.innerHTML = marked.parse('*Please enter a question or description about your plant.*');
    }
});

// Allow submission with Enter key (Shift+Enter for new line)
userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        submitBtn.click();
    }
}); 