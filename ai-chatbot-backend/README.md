# 🍽️ Meskott Restaurant Chatbot Backend

This is the **FastAPI backend** for the Meskott Restaurant website. It provides a live AI chatbot powered by **Gemini AI** that answers common customer questions about the restaurant — including booking, opening hours, dietary needs, and more.

---

## 📌 Features

✅ Gemini AI integration for conversational responses  
✅ FastAPI RESTful `/chat` endpoint  
✅ Custom restaurant context loaded from files  
✅ Input validation and error handling  
✅ CORS support for frontend communication  
✅ Docker containerization for deployment  
✅ Compatible with Render cloud hosting

---

## 🧠 AI Chatbot Capabilities

The chatbot can answer questions about:

- ⏰ Opening hours  
- 🍲 Signature and recommended dishes  
- 📍 Location and directions  
- 📞 Contact information  
- 🧾 How to book/reserve  
- 🥗 Dietary and special menu options  

---
## 🏙️ Live Deployment

- 🔗 **Backend URL:** [https://meskott-chatbott.onrender.com](https://meskott-chatbott.onrender.com)

## 📁 Project Structure

```
ai-chatbot-backend/
│
├── app/
│   ├── chatbot.py            
│   ├── main.py              
│   └── context/             
├── index.html               
├── script.js                
├── requirements.txt         
├── .env                      
├── Dockerfile                
├── .dockerignore             
└── README.md                
```

---

## 🚀 Getting Started Locally

### 1. Clone the repo

```bash
git clone https://github.com/your-username/ai-chatbot-backend.git
cd ai-chatbot-backend
```

### 2. Create a `.env` file

```bash
GEMINI_API_KEY=your_google_gemini_api_key
```

> ✅ **Do not share or commit your `.env` file.**

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Run the server

```bash
uvicorn app.main:app --reload
```

Visit: [http://localhost:8000/docs](http://localhost:8000/docs)

---

## 🐳 Docker Deployment

### 1. Build Docker image

```bash
docker build -t meskott-backend .
```

### 2. Run Docker container

```bash
docker run -d -p 8000:8000 meskott-backend
```

### 3. Access API

Visit: [http://localhost:8000/docs](http://localhost:8000/docs)

---

## 🌐 Deployment on Render

> You can deploy the backend easily to [Render](https://render.com).


---

## 📦 API Endpoint

### `POST /chat`

Sends a user question and receives a response from the AI chatbot.

- **Request Body:**

```json
{
  "user_question": "What are your opening hours?"
}
```

- **Response:**

```json
{
  "reply": "Hello there! Meskott is open during these hours: * **Monday to Friday:** 8:00 AM – 10:00 PM * **Saturday & Sunday:** 9:00 AM – 11:00 PM We look forward to welcoming you!"
}
```

---

## 🧪 Testing

- Use Swagger UI at `/docs` to test API
- Test with Postman for both valid and invalid inputs
- Confirm CORS works by connecting with your frontend live domain

---

## 🔒 Security

- Gemini API key is **stored in `.env`**
- `.env` is added to `.gitignore`
- No credentials are committed to GitHub

---

## 👥 Team Collaboration

This backend was developed on a feature branch and merged into a shared fullstack repo, following:

- ✅ Git feature branching
- ✅ Pull requests with code reviews
- ✅ Clean merge into main branch
