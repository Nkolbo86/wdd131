// Declare variables to hold references to the input, button, and list elements
const chapterInput = document.getElementById("chapterInput");
const addButton = document.getElementById("addButton");
const chapterList = document.getElementById("chapterList");

// Add event listener for the "Add Chapter" button
addButton.addEventListener("click", function () {
  // Get the user's input value
  const chapterTitle = chapterInput.value.trim();

  // Check if the input is blank
  if (chapterTitle === "") {
    alert("Please enter a chapter title!");
    chapterInput.focus(); // Return focus to the input field
    return;
  }

  // Create a new li element
  const li = document.createElement("li");

  // Populate the li element's textContent with the chapter title
  li.textContent = chapterTitle;

  // Create a delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "❌";
  deleteButton.classList.add("delete");

  // Append the delete button to the li element
  li.appendChild(deleteButton);

  // Append the li element to the chapter list
  chapterList.appendChild(li);

  // Clear the input field
  chapterInput.value = "";

  // Return focus to the input field
  chapterInput.focus();

  // Add event listener to the delete button
  deleteButton.addEventListener("click", function () {
    // Remove the li element when the delete button is clicked
    chapterList.removeChild(li);
  });
});
