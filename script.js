// --- 1. Filter Logic ---
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filterValue = button.getAttribute("data-filter");

    projectCards.forEach((card) => {
      const category = card.getAttribute("data-category");
      if (filterValue === "all" || filterValue === category) {
        card.style.display = "block";
        setTimeout(() => (card.style.opacity = "1"), 100);
      } else {
        card.style.display = "none";
        card.style.opacity = "0";
      }
    });
  });
});

// --- 2. LocalStorage Logic (Auto-Save) ---
const noteInput = document.getElementById("noteInput");
const saveStatus = document.getElementById("saveStatus");

// Load saved note
window.addEventListener("load", () => {
  const savedNote = localStorage.getItem("myDevNotes");
  if (savedNote) {
    noteInput.value = savedNote;
  }
});

// Save on input
noteInput.addEventListener("input", () => {
  localStorage.setItem("myDevNotes", noteInput.value);
  saveStatus.innerText = "Saving...";
  setTimeout(() => {
    saveStatus.innerText = "Saved";
    saveStatus.style.color = "#6a9955";
  }, 1000);
});

// Clear notes
function clearNotes() {
  if (confirm("Delete all notes?")) {
    localStorage.removeItem("myDevNotes");
    noteInput.value = "";
    saveStatus.innerText = "Cleared";
  }
}
