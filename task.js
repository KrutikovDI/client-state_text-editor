const editor = document.getElementById("editor");
if (localStorage.getItem("text")) {
  editor.value = localStorage.getItem("text");
}

editor.addEventListener("change", () => {
  localStorage.setItem("text", editor.value);
});