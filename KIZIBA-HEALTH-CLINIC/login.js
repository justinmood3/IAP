document.addEventListener('DOMContentLoaded', () => {

  const loginForm = document.getElementById('loginForm');
  const message = document.getElementById('message');

  const STORAGE_KEY = "kizibaPatients";

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const phone = document.getElementById('loginPhone').value;

    if (!phone) {
      message.textContent = "Please enter your phone number";
      return;
    }

    const patients = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    // Find patient by phone
    const patient = patients.find(p => p.phone === phone);

    if (!patient) {
      message.textContent = "No patient found. Please check-in first.";
      return;
    }

    // Save current patient session
    localStorage.setItem("currentPatientId", patient.id);

    message.textContent = "Login successful! Redirecting...";

    // Announce to screen reader
    if (typeof announceChange === 'function') {
      announceChange("Login successful. Redirecting to My Visit page.");
    }

    // Redirect
    setTimeout(() => {
      window.location.href = "myVisit.html";
    }, 1000);

  });

});