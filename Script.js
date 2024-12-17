// Basic form validation script
document.getElementById("contactForm").addEventListener("submit", function(event) {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    event.preventDefault();
    alert("Please fill out all fields.");
  }
});
