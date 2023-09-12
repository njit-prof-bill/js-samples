// Function to handle the button click
function changeContent() {
    const contentElement = document.getElementById('dynamic-content');
    contentElement.innerText = "The content has been changed by JavaScript!";
}

// Add the event listener to the button
document.getElementById('change-content').addEventListener('click', changeContent);

// Optionally, you can expand on this by adding more functions or logic as needed for your demonstration.
