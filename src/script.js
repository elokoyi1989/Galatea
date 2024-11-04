// script.js
const storyElement = document.getElementById("story");
const choicesElement = document.getElementById("choices");

let gameState = {};

function startGame() {
  gameState = {}; // Reset the game state
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

  // Type out the story text
  typeText(textNode.text, storyElement, () => {
    // After typing is complete, display choices
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
  const speed = 50; // Adjust typing speed here

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

  // // Remove the 'flash' class after the animation ends
  // setTimeout(() => {
  //   document.body.classList.remove("flash");
  // }, 500); // Match this duration to your CSS animation
}

const textNodes = [
  {
    id: 1,
    text: "You wake up in a dark forest. What do you do?",
    options: [
      { text: "Look around", nextText: 2 },
      { text: "Go back to sleep", nextText: 3 },
    ],
  },
  {
    id: 2,
    text: "You see a path leading north.",
    options: [
      { text: "Follow the path", nextText: 4, triggerFlash: true },
      { text: "Stay where you are", nextText: 5 },
    ],
  },
  {
    id: 3,
    text: "You decide to go back to sleep and never wake up again. The End.",
    options: [{ text: "Restart", nextText: -1 }],
  },
  {
    id: 4,
    text: "You follow the path and find a small village.",
    options: [
      { text: "Enter the village", nextText: 6 },
      { text: "Turn back", nextText: 5 },
    ],
  },
  {
    id: 5,
    text: "Night falls, and you are surrounded by the unknown. The End.",
    options: [{ text: "Restart", nextText: -1 }],
  },
  {
    id: 6,
    text: "The villagers welcome you warmly. You have found a new home. The End.",
    options: [{ text: "Restart", nextText: -1 }],
  },
  // Add more text nodes as needed...
];

startGame();
