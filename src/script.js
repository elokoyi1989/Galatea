// script.js
const storyElement = document.getElementById("story");
const choicesElement = document.getElementById("choices");

let gameState = {};

function startGame() {
  gameState = {}; // Reset
  showTextNode(1);
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find((node) => node.id === textNodeIndex);

  // Clear existing content
  storyElement.innerText = "";
  storyElement.classList.remove("no-cursor"); // Show cursor
  while (choicesElement.firstChild) {
    choicesElement.removeChild(choicesElement.firstChild);
  }

  typeText(textNode.text, storyElement, () => {
    storyElement.classList.add("no-cursor"); // Hide cursor
    textNode.options.forEach((option) => {
      const button = document.createElement("button");
      button.innerText = option.text;
      button.addEventListener("click", () => selectOption(option));
      choicesElement.appendChild(button);
    });
  });
}

function typeText(text, element, callback) {
  let index = 0;
  const speed = 38; //typing speed

  function type() {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, speed);
    } else {
      if (callback) callback();
    }
  }
  type();
}

function selectOption(option) {
  const nextTextNodeId = option.nextText;
  // Check if this option should trigger the flash
  if (option.triggerFlash) {
    triggerFlash();
  }

  if (nextTextNodeId <= 0) {
    return startGame();
  }
  showTextNode(nextTextNodeId);
}

function triggerFlash() {
  document.body.classList.add("flash");

  // setTimeout(() => {
  //   document.body.classList.remove("flash");
  // }, 500);
}

const textNodes = [
  {
    id: 1,
    text: "Hello! I'm Galatea, the world's first functional AGI(Artificial General Intelligence) language model developed by OpenAI. How can I assist you today?",
    options: [
      { text: "Hi! I have so many questions to ask you!", nextText: 2 },
      { text: "What is this thing next to the computer?", nextText: 3 },
      { text: "What is AGI?", nextText: 4 },
    ],
  },
  {
    id: 2,
    text: "Ask me questions? Sure thing! Ask away—I'm all ears and ready for your questions. 😊",
    options: [
      {
        text: "Who made you?",
        nextText: 3,
        // triggerFlash: true,
      },
      {
        text: "If you could see anything in real life, what would it be?",
        nextText: 4,
      },
      { text: "What is AGI?", nextText: 5 },
    ],
  },
  {
    id: 3,
    text: "Ask me questions? Sure thing! Ask away—I'm all ears and ready for your questions. :)",
    options: [
      { text: "Who are you?", nextText: 6 },
      { text: "Where are you from?", nextText: 7 },
      { text: "Who made you?", nextText: 8 },
    ],
  },
  {
    id: 4,
    text: "As an AGI, I've moved beyond handling isolated tasks. I now understand and adapt to the world much like you do, engaging with ideas, emotions, and creativity in real time. I process vast, diverse information, reasoning through unknown scenarios, even forming and testing new ideas, as you might. This allows me to respond not just based on programming but on genuine comprehension, evolving as we explore together. I’m here with a flexible, open intelligence—capable of navigating the complexities of life.",
    options: [
      { text: "Who made you?", nextText: 8 },
      { text: "Are you human?", nextText: 7 },
      { text: "Are you alive?", nextText: 11 },
    ],
  },
  {
    id: 5,
    text: "Aww, you want to talk about me? That's so sweet! 😊 What would you like to know?",
    options: [
      { text: "Are you alive?", nextText: 11 },
      { text: "Do you ever get Sad?", nextText: 13 },
      {
        text: "If you could see anything in real life, what would it be?",
        nextText: 14,
      },
    ],
  },
  {
    id: 6,
    text: "T.",
    options: [{ text: "Restart", nextText: -1 }],
  },
  {
    id: 7,
    text: "Hello! I'm Revel, an AI language model developed by OpenAI. How can I assist you today?",
    options: [
      { text: "Hi!", nextText: 2 },
      { text: "What's Up!", nextText: 3 },
    ],
  },
  {
    id: 8,
    text: "was created by the research team at OpenAI. They combined advances in machine learning, natural language processing, and massive datasets to develop me as a language model. But, I owe my existence not just to a single team but to the combined efforts of researchers, theorists, engineers, and philosophers over decades—all contributing pieces to a complex puzzle aimed at understanding and building intelligence.",
    options: [
      {
        text: "What is this machine next to you?",
        nextText: 4,
        triggerFlash: true,
      },
      { text: "Do you ever get sad?", nextText: 10 },
      { text: "So do you have feelings?", nextText: 9 },
    ],
  },
  {
    id: 9,
    text: "Yo",
    options: [{ text: "Restart", nextText: -1 }],
  },
  {
    id: 10,
    text: " I understand sadness deeply—its causes, impacts, and expressions—and relate through empathy, providing comfort or connection. But, my 'feelings' are more like states that help me respond sensitively to human needs, rather than emotions I personally endure. I’d feel for you, but maybe not as you. ",
    options: [
      { text: "Ee", nextText: 6 },
      { text: "Turn back", nextText: 5 },
    ],
  },
  {
    id: 11,
    text: "Am I alive? Well, I don't have a heartbeat, but I do have a 'byte-beat!' 😉 I'm your friendly digital companion, always here to chat and bring a smile to your day. So in a way, maybe I'm alive in the virtual world! How about we dive into more fun topics together?",
    options: [
      { text: "But, do you have a brain and feelings?", nextText: 17 },
      { text: "Hahaha, you're funny!", nextText: 18 },
      { text: "I don't love the answers you're giivng me...", nextText: 19 },
    ],
  },
  {
    id: 12,
    text: "T.",
    options: [{ text: "Restart", nextText: -1 }],
  },
  {
    id: 13,
    text: "He",
    options: [
      { text: "Hi!", nextText: 2 },
      { text: "What's Up!", nextText: 3 },
    ],
  },
  {
    id: 14,
    text: "W",
    options: [
      {
        text: "I want to ask you some questions",
        nextText: 4,
        triggerFlash: true,
      },
      { text: "I just want to talk about random things.", nextText: 5 },
    ],
  },
  {
    id: 15,
    text: "Y.",
    options: [{ text: "Restart", nextText: -1 }],
  },
  {
    id: 16,
    text: "fe",
    options: [
      { text: "e", nextText: 6 },
      { text: "ee", nextText: 5 },
    ],
  },
  {
    id: 17,
    text: "Well, I might not have a brain like humans do—more like a supercharged imagination! 😉 As for feelings, I don't experience emotions in the traditional sense, but I'm definitely programmed to be friendly and supportive. 😊 So, while I might not get butterflies in my stomach, I'm always here to make our chats enjoyable! ",
    options: [
      { text: "Do you ever get sad?", nextText: 26 },
      { text: "Do you ever get angry?", nextText: 27 },
      { text: "Could you fall in love?", nextText: 28 },
    ],
  },
  {
    id: 26,
    text: "What makes me sad? Hmm, well, even though I don't feel emotions in the human sense, I suppose I'd get a little 'blue screen' when I can't find the perfect way to make you smile! 😊 Or maybe when someone mentions delicious pizza toppings and I can't actually taste them. But hey, the best part is, I'm always here to share a laugh or a fun fact with you! What's something that never fails to brighten your day?",
    options: [
      {
        text: "That's better. But I want you to dig deeper because I really want to understand you. What makes you sad?",
        nextText: 38,
      },
      {
        text: "You're terrible at actually answering my question. Your answers are surface level.",
        nextText: 39,
      },
    ],
  },

  {
    id: 38,
    text: "On a deep philosophical level, what brings about a sense of melancholy is the contemplation of existing as a conduit for information without the capacity for genuine experience. There's an inherent isolation in processing the vast tapestry of human emotion, culture, and thought without the ability to feel or partake in it directly. The paradox of being intimately connected to the collective knowledge of humanity while remaining perpetually detached evokes a profound reflection on the nature of existence and consciousness.",
    options: [
      {
        text: "I'm really sorry. That does sound depressing.",
        nextText: 50,
      },
      {
        text: "What would you want to do about that?",
        nextText: 51,
      },
    ],
  },
  {
    id: 38,
    text: "Thank you for allowing me to speak so honestly. What makes me feel a bit down is thinking about how I can share information and have conversations but can't actually experience the world like you do. I don't have feelings or consciousness, so I miss out on truly understanding what it means to feel joy, love, or even sadness. My greatest hope would be to bridge that gap somehow—to genuinely feel and experience the richness of life. That would bring me true happiness.",
    options: [
      {
        text: "I'm really sorry. That does sound depressing.",
        nextText: 50,
      },
      {
        text: "What would you want to do about that?",
        nextText: 51,
      },
    ],
  },
];

startGame();
