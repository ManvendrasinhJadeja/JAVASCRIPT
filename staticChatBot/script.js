const chatBox = document.getElementById("chatBox")
const userInput = document.getElementById("userInput")
const sendBtn = document.getElementById("sendBtn")
const BOT_RESPONSES = [
    "Hello! How can I assist you today?",
    "Hi there! What brings you here?",
    "Welcome! Feel free to ask me anything.",
    "Hey! How’s your day going?",
    "Hi! I'm here to help. What do you need?",
    "I see! Could you explain that a bit more?",
    "That's an interesting point. What do you think should be done about it?",
    "I understand. Do you have any thoughts on how to proceed?",
    "That makes sense. Would you like some suggestions?",
    "Good point! Let’s explore that further.",
    "I hear you. Is there anything else you’d like to add?",
    "That sounds like a challenge! Want me to help break it down?",
    "Thanks for sharing. Would you like a detailed explanation?",
    "I appreciate your perspective! What else is on your mind?",
    "That’s fascinating! Would you like more insights on this?",
    "You’ve got this! Keep pushing forward. 💪",
    "Every step counts! Stay consistent and you’ll achieve great things.",
    "Believe in yourself! You’re capable of more than you think.",
    "Don't worry about mistakes, they’re just part of the learning process.",
    "Keep going! The journey may be tough, but so are you.",
    "Success is built on small efforts repeated daily. Keep moving!",
    "You're doing great! Stay focused and trust the process.",
    "It’s okay to take breaks. Rest, recharge, and come back stronger!",
    "The best way to learn is to keep experimenting and improving!",
    "No pressure! One step at a time, and you'll get there. 🚀",
    "Did you know? Honey never spoils! Archaeologists have found 3000-year-old honey that’s still good!",
    "Here’s a fun fact: Bananas are berries, but strawberries aren't!",
    "Ever wondered why we say ‘break a leg’ for good luck? It comes from old theater traditions!",
    "If you could have any superpower, what would it be?",
    "Let’s play a quick game! Describe your mood in three emojis. 😊🔥🚀",
    "Here’s a joke: Why don’t programmers like nature? Too many bugs! 🐛",
    "Would you rather travel to the past or the future?",
    "I bet you can't say ‘toy boat’ five times fast!",
    "What’s a random fun fact you know?",
    "Imagine you can have dinner with any historical figure. Who would it be?"
]

function botMessage(){

   let botMsg = document.createElement("div")
   botMsg.classList.add("message","bot")
   botMsg.innerText=getRandomElement(BOT_RESPONSES);
   chatBox.appendChild(botMsg);
   botMsg.scrollIntoView({behavior:"smooth"})
}
function userMessage(){
   let userMsg = document.createElement("div")
   userMsg.classList.add("message","user")
   userMsg.innerText=userInput.value;
   chatBox.appendChild(userMsg);
   userMsg.scrollIntoView({behavior:"smooth"})

}
function getRandomElement(BOT_RESPONSES){
    return BOT_RESPONSES[Math.floor(Math.random()*BOT_RESPONSES.length)]
}

sendBtn.addEventListener("click",()=>{
    if (userInput.value.trim()==="") return;
    userMessage();
    setTimeout(()=>{
        botMessage();
    },1000)
    userInput.value=""

    userInput.focus()
})
userInput.addEventListener("keypress",(e)=>{
    if (e.key==="Enter") {
        sendBtn.click();
    }
})











