document.addEventListener("DOMContentLoaded", () => {
   const form = document.getElementById("chat-form");
   const input = document.getElementById("user-input");
   const chatBox = document.getElementById("chat-box");


   const backendURL = "https://meskott-restaurant-production.up.railway.app/ ";

   form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const message = input.value.trim();
      if (!message) {
         alert("Please enter a question.");
         return;
      }

      addMessage("You", message);
      input.value = "";
      input.disabled = true;

      try {
         const response = await fetch(backendURL, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({ user_question: message }),
         });

         if (!response.ok) {
            throw new Error("Server error");
         }

         const data = await response.json();
         addMessage("MeskottBot", data.reply);
      } catch (error) {
         addMessage("MeskottBot", "Sorry, something went wrong. Try again.");
      } finally {
         input.disabled = false;
         input.focus();
      }
   });

   function addMessage(sender, text) {
      const messageElem = document.createElement("div");
      messageElem.classList.add("message");
      messageElem.innerHTML = `<strong>${sender}:</strong> ${text}`;
      chatBox.appendChild(messageElem);
      chatBox.scrollTop = chatBox.scrollHeight;
   }
});