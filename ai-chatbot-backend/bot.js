const chatbotToggle = document.querySelector(".chatbot-toggle");
const chatbotContainer = document.getElementById("chatbot");
const chatbotClose = document.getElementById("chatbot-close");
const chatBox = document.getElementById("chat-box");
const chatForm = document.getElementById("chat-form");
const userInput = document.getElementById("user-input");
const loadingIndicator = document.getElementById("loading-indicator");

const backendUrl = "https://meskott-chatbott.onrender.com/chat";

chatbotToggle.addEventListener("click", () => {
   chatbotContainer.classList.toggle("hidden");
});

chatbotClose.addEventListener("click", () => {
   chatbotContainer.classList.add("hidden");
});

chatForm.addEventListener("submit", async (e) => {
   e.preventDefault();
   const question = userInput.value.trim();

   if (!question) {
      chatBox.innerHTML += `<p><strong>You:</strong> Please enter a valid question.</p>`;
      return;
   }

   chatBox.innerHTML += `<p><strong>You:</strong> ${question}</p>`;
   userInput.value = "";

   loadingIndicator.classList.remove("hidden");

   try {
      const response = await fetch(backendUrl, {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify({ user_question: question })
      });

      const data = await response.json();
      chatBox.innerHTML += `<p><strong>Meski AI:</strong> ${data.reply}</p>`;
   } catch (err) {
      chatBox.innerHTML += `<p><strong>Error:</strong> Something went wrong while getting your answer.</p>`;
   } finally {
      loadingIndicator.classList.add("hidden");
      chatBox.scrollTop = chatBox.scrollHeight;
   }
});