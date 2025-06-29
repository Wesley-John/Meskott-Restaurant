/*Typewriter Segment*/
const h1El = document.getElementById("h1-el");
const h1Type = "Welcome to Meskotte Culinary Restaurant Experience";
let charIndex = 0;
const typingSpeed = 100;

function typeWriter() {
   if (charIndex < h1Type.length) {
      h1El.textContent += h1Type.charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, typingSpeed)
   }
}

document.addEventListener('DOMContentLoaded', typeWriter);

/* Carousel Segment */
const carousel = document.getElementById('carousel');
let index = 0;
const totalSlides = carousel.children.length;

setInterval(() => {
   index = (index + 1) % totalSlides;
   carousel.style.transform = `translateX(-${index * 100}%)`;
}, 4000);

/* Form Confirmation Message */
const form = document.querySelector("form");
const message = document.getElementById("confirmation-message");

form.addEventListener("submit", function () {
   message.style.display = "block";
   form.reset();
   setTimeout(() => {
      message.style.display = "none"
   }, 5000);
});

/* Dark and Light mode toggle */
document.addEventListener('DOMContentLoaded', () => {
   const toggleThemeBtn = document.getElementById('theme-toggle');
   const rootElement = document.documentElement;
   const savedTheme = localStorage.getItem('theme');

   // Apply saved theme on load
   if (savedTheme === 'dark') {
      rootElement.classList.add('dark');
   }

   // Toggle theme on click
   toggleThemeBtn?.addEventListener('click', () => {
      rootElement.classList.toggle('dark');

      const currentTheme = rootElement.classList.contains('dark') ? 'dark' : 'light';
      localStorage.setItem('theme', currentTheme);
   });
});

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
      chatBox.innerHTML += `<p><strong>You:</strong> Please enter a message.</p>`;
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
      chatBox.innerHTML += `<p><strong>Error:</strong> Something went wrong.</p>`;
   } finally {
      loadingIndicator.classList.add("hidden");
      chatBox.scrollTop = chatBox.scrollHeight;
   }
});
