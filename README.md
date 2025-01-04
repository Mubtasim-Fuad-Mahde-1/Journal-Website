# Journal Website with Sentiment Analysis

This repository contains the code for a **Journal Website** built using the MERN stack (MongoDB, Express, React, Node.js). The application is designed to provide users with a private space to write and manage journal entries. Integrated with a sentiment analysis feature, the application evaluates the user's recent journal entries to detect their emotional state and offers messages or prompts to foster emotional engagement and well-being.

---

## Features

### Journal Management
- Users can:
  - create, read, update, and delete journal entries.
  - View all previous entries in an organized timeline.
  - Interact with other users throught Client-Server based chat system
  - Coummity page for users to post and interact with other users

### Sentiment Analysis
- The system analyzes the user's most recent journal entries using natural language processing (NLP).
- It detects the user's emotional state (e.g., happy, sad, neutral) and displays prompts or supportive messages to encourage deeper engagement or offer emotional support.

### User Authentication
- Secure authentication using JWT (JSON Web Token).
- Password hashing for secure storage.

### Responsive Design
- Fully responsive design, optimized for desktop only.

---

## Technologies Used

### Frontend
- **React.js**
  - React Router for navigation
  - Axios for API requests

### Backend
- **Node.js** with **Express.js**
  - RESTful API design
  - Middleware for error handling and authentication

### Database
- **MongoDB**
  - Mongoose for database schema and interaction

### Sentiment Analysis
- Integrated with a Python-based sentiment analysis module using **Hugging Face** API
- Communication between the backend and sentiment analysis service using API endpoints.

---

## Usage
- Register or log in to start using the journal.
- Write journal entries and let the sentiment analysis provide insights and prompts based on your emotional state.
- Chat with other users.

---

## Future Improvements
- Enhance sentiment analysis with more advanced NLP models (e.g., transformers).
- Add multi-language support.
- Enable users to visualize emotional trends over time.
- Include options for mood tracking and additional mental health resources.
- Create distributed **P2P** chat system to reduce load from server.
- Include media upload system for the community page and post like/react modules.

---

## Acknowledgements
- [MongoDB](https://www.mongodb.com/)
- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Hugging Face](https://huggingface.co/)

---

## Contact
For any inquiries or feedback, please contact: **your-email@example.com**.

