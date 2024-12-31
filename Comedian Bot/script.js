let jokeIndex = 0;
const jokes = [
 ["If the internet is a boat, where would they park it?",
  "Google doc."
 ],
 ["What did 0 say to 8?",
  "Nice belt."
 ]
];
const chatContent = document
 .querySelector(".chat-content");
const jokeButton = document
 .getElementById(
  "requestJokeButton");

function scrollToNewElement(
 element) {
 element.scrollIntoView();
}

function appendBotMessage(
 messageText) {
 const messageDiv = document
  .createElement("div");
 messageDiv.className =
  "message bot-message";
 const avatar = document
  .createElement("div");
 avatar.className =
  "fas fa-robot message-avatar";
 const contentDiv = document
  .createElement("div");
 contentDiv.className =
  "message-content";
 contentDiv.textContent =
  messageText;
 messageDiv.append(avatar,
  contentDiv);
 chatContent.appendChild(
  messageDiv);
 scrollToNewElement(messageDiv);
}

function appendUserMessage() {
 const messageDiv = document
  .createElement("div");
 messageDiv.className =
  "message user-message";
 const avatar = document
  .createElement("div");
 avatar.className =
  "fas fa-smile message-avatar";
 const contentDiv = document
  .createElement("div");
 contentDiv.className =
  "message-content";
 contentDiv.textContent =
  "Tell me a joke!";
 messageDiv.append(contentDiv,
  avatar);
 chatContent.appendChild(
  messageDiv);
 chatContent.scrollTop =
  chatContent.scrollHeight;
 scrollToNewElement(messageDiv);
}
appendBotMessage(
 "Hello! I am Comedian Bot, here to make you laugh. Let me think of a joke."
);

function requestJoke() {
 appendUserMessage();
 if (jokeIndex >= jokes.length) {
  appendBotMessage(
   "Sorry, I'm out of jokes for now!"
  );
  return;
 } else {
  appendBotMessage("Hmm ..");
 }
 jokeButton.style.display =
  "none";
 setTimeout(function() {
  appendBotMessage(
   "Ok, got one.");
 }, 2000);
 setTimeout(function() {
  appendBotMessage(jokes[
   jokeIndex][0]);
 }, 2500);
 setTimeout(function() {
  appendBotMessage(jokes[
   jokeIndex][1]);
  jokeIndex++;
  jokeButton.style.display =
   "inline-block";
  scrollToNewElement(
   jokeButton);
 }, 5000);
}