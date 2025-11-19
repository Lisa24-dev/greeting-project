function greetUser() {
  let userName = prompt('What is your name?');
  let userMood = prompt('How are you feeling?');
  const result = userName + userMood;
  alert(`Hello ${userName}! It seems you're ${userMood} today!`);
}
