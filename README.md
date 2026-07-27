# AI-SDK Demo App
# StudyMate Mini — AI Academic Tutor

StudyMate Mini is a lightweight, streaming AI academic tutoring web application built with **Express.js**, **Node.js**, and the **Vercel AI SDK** powered by **Groq (`llama-3.3-70b-versatile`)**.

It serves as an interactive live-coding exercise and tutorial to demonstrate real-time LLM response streaming chunk-by-chunk directly to a browser frontend using the Vercel AI SDK.

---

## Features

- **Real-time AI Chat Streaming (`/api/chat`):** Streams conversational responses in real-time using Vercel AI SDK's `streamText()` and `pipeTextStreamToResponse()`.
- **Model Agnostic Architecture:** Standardized LLM provider integration via `@ai-sdk/groq`, allowing seamless provider switching.
- **Conversational Context:** Handles multi-turn chat sessions by passing message history state between the client and server.
- **Minimalist Frontend:** Pure HTML5, CSS3, and JavaScript using the native browser `ReadableStream` API.

---

## Tech Stack

- **Backend:** Node.js (ES Modules), Express.js, CORS
- **AI Provider / SDK:** `@ai-sdk/groq`, `ai` (Vercel AI SDK)
- **LLM Model:** `llama-3.3-70b-versatile`
- **Frontend:** HTML5, CSS3, JavaScript (`ReadableStream` API)

---

## Recommended VS Code Extensions

- **Prettier - Code Formatter** (`esbenp.prettier-vscode`)
- **ESLint** (`dbaeumer.vscode-eslint`)
- **DotENV** (`mikestead.dotenv`)
- **REST Client** (`humao.rest-client`)

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- A **Groq API Key** (Get one at https://console.groq.com/)

---

## GitHub Repository

https://github.com/patrickagu/AI-SDK-DEMO

---

## Local Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/patrickagu/AI-SDK-DEMO.git
cd AI-SDK-DEMO
```

### 2. Install Dependencies

Install Express, CORS, DotENV, the core Vercel AI SDK, and the Groq provider package using npm:

```bash
npm init -y
npm install express cors dotenv ai @ai-sdk/groq
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
GROQ_API_KEY=your_actual_groq_api_key_here
PORT=3000
```

### 4. Configure package.json for ES Modules

In the `package.json` file in the root folder, ensure ES Modules are enabled so modern `import` statements work properly.

1. Add:

```json
"type": "module"
```

2. Add the following inside the `"scripts"` object:

```json
"dev": "node server.js"
```

---

## Run the Application

When finished with coding, run:

```bash
npm run dev
```

Then open:

```
http://localhost:3000
```

in your browser.

---

## Project Structure

```text
AI-SDK-DEMO/
├── public/
│   ├── index.html         # User interface
│   ├── style.css          # UI styles
│   └── app.js             # Client-side streaming reader & DOM handling
├── .env                   # Local environment variables (GROQ_API_KEY, PORT)
├── package.json           # Node.js dependencies and scripts
├── server.js              # Express application backend & AI SDK endpoint
└── README.md              # Project documentation
```