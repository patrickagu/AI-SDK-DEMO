// Array to hold chat messages

// Add an event listener for the chat form submission
     
    // Prevent the default form submission behavior 

    // Get the user input element
    
    // Get the chat box element
    
    // Get the trimmed user input value

    // If the user input is empty, do not proceed

    

    //Append the user's message to the chat box
    
    // Add the user's message to the chat messages array

    // Clear the input field

    

    // Add a placeholder for the bot's message in the chat box

    // Fetch stream from the server
    // Send a POST request to the '/api/chat' endpoint
        
        // Specify the request method as POST

        // Set the request headers to indicate JSON content
        
        // Send the chat messages as the request body



    // Read stream chunks
    // Get a reader for the response body stream
    
    // Create a TextDecoder to decode the stream chunks
    
    // Clear the placeholder text for the bot's message i.e., "Thinking..."
    
    // Initialize a variable to hold the bot's response

    
    // Continuously read from the stream until it's done
        
        // Read a chunk from the stream

        // Exit the loop if the stream is done


        // Decode the chunk using the TextDecoder
        
        // Append the chunk to the bot's response
        
        // Update the bot's message in the chat box with the new chunk
        
        // Scroll the chat box to the bottom to show the latest message

    

    // Save the bot's response to conversation history
    // Add the bot's response to the chat messages array



// Function to append a message to the chat box
function appendMessage(role, content) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', role);
    messageDiv.textContent = content;
    document.getElementById('chat-box').appendChild(messageDiv);
    return messageDiv; // Return the messageDiv
}
