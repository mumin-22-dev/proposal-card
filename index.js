const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionContainer = document.getElementById("questionContainer");
const heartLoader = document.getElementById("heartLoader");
const resultContainer = document.getElementById("resultContainer");

// ❌ No button পালাবে
noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * 300);
  const newY = Math.floor(Math.random() * 200);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});


yesBtn.addEventListener("click", () => {
  
  questionContainer.style.display = "none";

  
  heartLoader.style.display = "block";

  setTimeout(() => {
    heartLoader.style.display = "none"; 
    resultContainer.style.display = "block"; 
  }, 2000);
});
