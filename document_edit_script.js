const editor = document.querySelector('.editor');

// Load saved content from local storage
const savedContent = localStorage.getItem('editorContent');
if (savedContent) {
  editor.innerHTML = savedContent;
}

// Save content to local storage when the user types
editor.addEventListener('input', () => {
  localStorage.setItem('editorContent', editor.innerHTML);
});