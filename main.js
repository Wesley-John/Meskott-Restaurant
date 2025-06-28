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

form.addEventListener("submit", function(){
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

/*Chatbot*/
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".chatbot-toggle");
  const chatbot = document.getElementById("chatbot");
  const sendBtn = document.getElementById("send-btn");
  const input = document.getElementById("user-input");
  const chatBox = chatbot.querySelector(".chat-box");

  // Replace with your actual deployed backend endpoint
  const backendURL = "https://your-backend-domain.com/chat";

  // Toggle chatbot visibility
  toggleBtn.addEventListener("click", () => {
    chatbot.classList.toggle("hidden");
  });

  // Handle send button click
  sendBtn.addEventListener("click", async () => {
    const message = input.value.trim();
    if (!message) return;

    addMessage("You", message);
    input.value = "";
    input.disabled = true;
    document.getElementById("loading-indicator").classList.remove("hidden")

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
      addMessage("Meski AI", data.reply);
    } catch (err) {
      addMessage("Meski AI", "⚠️ Oops, something went wrong. Please try again.");
    } finally {
        input.disabled = false;
        input.focus();
        document.getElementById("loading-indicator").classList.add("hidden");
    }
  });

  // Allow Enter key to send
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendBtn.click();
    }
  });

  // Display chat messages in the box
  function addMessage(sender, text) {
    const messageElem = document.createElement("div");
    messageElem.classList.add("mb-2", "text-sm");
    messageElem.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatBox.appendChild(messageElem);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
});

const closeBtn = document.getElementById("chatbot-close");

closeBtn.addEventListener("click", () => {
  chatbot.classList.add("hidden");
});
