// Import the Express library to create a web server
 import express from 'express';
// Import the CORS middleware to handle cross-origin requests
import cors from 'cors';
// Import the dotenv library to load environment variables from a .env file
import 'dotenv/config';
// Import the streamText function from the ai module to handle streaming text responses
import { streamText, pipeTextStreamToResponse, toTextStream } from 'ai';
// Import the groq function from the @ai-sdk/groq module to handle GROQ queries
import { groq } from '@ai-sdk/groq';

// Create an instance of the Express application
const app = express();
// Use the CORS Express middleware for handling cross-origin requests
app.use(cors());
// Use the JSON middleware to parse JSON request bodies
app.use(express.json());
// Serve static files from the 'public' directory
app.use(express.static('public'));
// Define a POST endpoint for the '/api/chat' route
app.post('/api/chat', async (req, res) => {
    try {
        // Extract the 'messages' from the request body
        const { messages } = req.body;
        // Call the streamText function to handle the streaming text response
        const result = streamText({
            // Specify the model to use for generating responses
            model: groq(`llama-3.3-70b-versatile`), 
            // Vercel AI SDK property for system instructions
        system: 'You are StudyBuddy, a helpful and knowledgeable assistant. You will answer questions and provide explanations to college students in a clear and concise manner.',
            // Pass the messages to the model for generating a response 
            messages,
        });

        // Pipe the streaming text response to the Express response object
        result.pipeTextStreamToResponse(res);
    // Catch any errors that occur during the request handling
       } catch (error) {
        // Log the error to the console
        console.error('Error handling /api/chat request:', error);
        // Send a 500 Internal Server Error response
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }); 

// Start the Express server on the specified port or default to 3000
app.listen(process.env.PORT || 3000, () => {
    // Log a message indicating that the server is running
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});


