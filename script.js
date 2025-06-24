function checkStrength() {
  const password = document.getElementById('password').value;
  let score = 0;
  let feedback = [];
  let enthusiasmMsg = '';
  let catMsg = '';

  // Enthusiastic messages
  const goodMsgs = [
    "Awesome! 🚀",
    "Great job! 💪",
    "Your password rocks! 🎸",
    "Super strong! 🏆",
    "Impressive work! 😎"
  ];
  const weakMsgs = [
    "You can do it! 🔥",
    "Keep going! 🌟",
    "Almost there! 💡",
    "Try adding more variety! 🎨",
    "Make it even stronger! 💪"
  ];

  // Password checks
  if (password.length >= 8) score++; else feedback.push("At least 8 characters.");
  if (/[a-z]/.test(password)) score++; else feedback.push("At least one lowercase letter.");
  if (/[A-Z]/.test(password)) score++; else feedback.push("At least one uppercase letter.");
  if (/\d/.test(password)) score++; else feedback.push("At least one digit.");
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score++; else feedback.push("At least one special character.");

  // Enthusiastic feedback
  if (score === 5) {
    enthusiasmMsg = goodMsgs[Math.floor(Math.random() * goodMsgs.length)];
  } else {
    enthusiasmMsg = weakMsgs[Math.floor(Math.random() * weakMsgs.length)];
  }

  // Cat password log
  const catWords = ["cat", "kitty", "meow", "purr", "kitten", "nyan"];
  let foundCat = catWords.some(word => password.toLowerCase().includes(word));
  if (foundCat) {
    catMsg = "😺 Meow! That's a cute cat-related password!";
  } else {
    catMsg = "";
  }
  document.getElementById('catlog').innerText = catMsg;

  let result = document.getElementById('result');
  if (score === 5) {
    result.style.color = "#34a853";
    result.innerText = "Your password is strong!";
  } else {
    result.style.color = "#ea4335";
    result.innerText = "Weak password. Suggestions:\n" + feedback.join('\n');
  }
  document.getElementById('enthusiasm').innerText = enthusiasmMsg;
}
