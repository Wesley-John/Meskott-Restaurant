from fastapi import FastAPI, Request
import google.generativeai as genai
import os
from dotenv import load_dotenv
import requests 


load_dotenv()
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

genai.configure(api_key=GEMINI_API_KEY)
model = genai.GenerativeModel("gemini-pro")

app = FastAPI()

@app.post("/chat")
async def chat(request:Request):
   data = await request.json()
   user_input = data.get("message")

   if not user_input.strip():
      return {"response": "Please enter a question."}

   try:
      response = model.generate_content(user_input)
      reply = response.text
      return {"reply": reply}
   
   except Exception as e:
      return {"error": "Something went wrong while trying to get your answer."}

@app.get("/")
async def root():
   return {"message": "API is running"}