// Import the Express library to create a web server
 
// Import the CORS middleware to handle cross-origin requests

// Import the dotenv library to load environment variables from a .env file

// Import the streamText function from the ai module to handle streaming text responses

// Import the groq function from the @ai-sdk/groq module to handle GROQ queries

// Create an instance of the Express application

// Use the CORS Express middleware for handling cross-origin requests

// Use the JSON middleware to parse JSON request bodies

// Serve static files from the 'public' directory

// Define a POST endpoint for the '/api/chat' route


        // Extract the 'messages' from the request body

        // Call the streamText function to handle the streaming text response

            // Specify the model to use for generating responses
            
            // Vercel AI SDK property for system instructions

            // Pass the messages to the model for generating a response 
        


        // Pipe the streaming text response to the Express response object

    // Catch any errors that occur during the request handling

        // Log the error to the console

        // Send a 500 Internal Server Error response

    


// Start the Express server on the specified port or default to 3000

    // Log a message indicating that the server is running


