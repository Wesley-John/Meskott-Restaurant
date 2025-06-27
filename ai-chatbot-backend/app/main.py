from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from app.chatbot import get_chatbot_response

app = FastAPI()

class ChatRequest(BaseModel):
    user_question: str

class ChatResponse(BaseModel):
    reply: str

@app.post("/chat", response_model=ChatResponse)
async def chat_endpoint(request: ChatRequest):
    user_question = request.user_question.strip()
    if not user_question:
        raise HTTPException(status_code=400, detail="Please provide a valid question.")

    reply = get_chatbot_response(user_question)
    return ChatResponse(reply=reply)

@app.get("/")
async def root():
    return {"message": "MeskottBot API is running"}