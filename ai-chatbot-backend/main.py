from fastapi import FastAPI, Request
import os
from dotenv import load_dotenv
import requests 


load_dotenv()

app = FastAPI()

@app.post("/chat")
async def chatbot(request:Request):
   data = await request.json()
   user_input = data.get("message")

   if not user_input.strip():
      return {"response": "Please enter a question."}

   response = f"Echo: {user_input}"
   
   return {"reply": response}

@app.get("/")
async def root():
   return {"message": "API is running"}