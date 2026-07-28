// app.js
// Array to hold chat messages
const chatMessages = [];
// Add an event listener for the chat form submission
     document.getElementById('chat-form').addEventListener('submit', async (event) => {
    // Prevent the default form submission behavior 
    event.preventDefault();
    // Get the user input element
    const input = document.getElementById('user-input');
    // Get the chat box element
    const chatBox = document.getElementById('chat-box');
    // Get the trimmed user input value
    const userText = input.value.trim();
    // If the user input is empty, do not proceed
    if (!userText){ 
        return;
    }
    // Append the user's message to the chat box
    appendMessage('User', userText);
    // Add the user's message to the chat messages array
    chatMessages.push({ role: 'user', content: userText });

    // Clear the input field
    input.value = '';

    // Add a placeholder for the bot's message in the chat box
    const botMessage = appendMessage('StudyMate', 'Thinking...');
    
    // Fetch stream from the server
    // Send a POST request to the '/api/chat' endpoint
    const response = await fetch('/api/chat', {    
        // Specify the request method as POST
        method: 'POST',
        // Set the request headers to indicate JSON content
        headers: {
            'Content-Type': 'application/json'
        },
        // Send the chat messages as the request body
        body: JSON.stringify({ messages: chatMessages })
    });

    // Read stream chunks
    // Get a reader for the response body stream
    const reader = response.body.getReader();
    // Create a TextDecoder to decode the stream chunks
    const decoder = new TextDecoder();
    // Clear the placeholder text for the bot's message i.e., "Thinking..."
    botMessage.innerText = '';    
    // Initialize a variable to hold the bot's response
    let botResponse = '';
    
    // Continuously read from the stream until it's done
    while (true) {   
        // Read a chunk from the stream
        const { done, value } = await reader.read();
        // Exit the loop if the stream is done
        if (done) break;

        // Decode the chunk using the TextDecoder
        const chunk = decoder.decode(value, { stream: true });

        // Append the chunk to the bot's response
        botResponse += chunk;

        // Update the bot's message in the chat box with the new chunk
        botMessage.innerText = botResponse;

        // Scroll the chat box to the bottom to show the latest message
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    // Save the bot's response to conversation history
    // Add the bot's response to the chat messages array
    chatMessages.push({ role: 'assistant', content: botResponse });
});

// Function to append a message to the chat box
function appendMessage(role, content) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', role);
    messageDiv.innerText = content;
    document.getElementById('chat-box').appendChild(messageDiv);
    return messageDiv;
}

