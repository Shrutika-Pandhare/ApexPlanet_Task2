const slider = document.getElementById("slider");

slider.addEventListener("input", () => {
  slider.style.background = `linear-gradient(to right, #1f2e78 0%, #1f2e78 ${slider.value * 10}%, #e4e8f9 ${slider.value * 10}%, #e4e8f9 100%)`;
});




document.getElementById("feedbackForm").addEventListener("submit", function (event) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const feedback = document.getElementById("feedback").value.trim();

  let errorMessage = "";

  if (name.length < 2) {
    errorMessage += "Name must be at least 2 characters long.\n";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errorMessage += "Please enter a valid email address.\n";
  }

  if (feedback.length < 10) {
    errorMessage += "Feedback must be at least 10 characters long.\n";
  }

  if (errorMessage) {
    alert(errorMessage);
    event.preventDefault(); 
  } else {
    alert("Thank you for your feedback! ^_____^");
  }
});

