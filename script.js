  const textInput = document.querySelector("#text-input");
const charCount = document.querySelector("#char-count");

textInput.addEventListener("input", function() {
  if (textInput.value.length > 50) {
    textInput.value = textInput.value.slice(0, 50);
  }

  const count = textInput.value.length;

  charCount.textContent = `Character Count: ${count}/50`;

  if (count === 50) {
    charCount.style.color = "red";
  } else {
    charCount.style.color = "";
  }
});  