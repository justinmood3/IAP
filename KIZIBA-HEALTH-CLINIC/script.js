document.addEventListener('DOMContentLoaded', () => {

  const STORAGE_KEY = "kizibaPatients";
  const FEEDBACK_KEY = "kizibaFeedback";

  // ===============================
  // 📄 DISPLAY PATIENT INFO FUNCTION
  // ===============================
  const patientInfoDiv = document.getElementById('patientInfo');
  const visitInfoDiv = document.getElementById('visitInfo');

  function displayPatient(patient) {
    if (!patientInfoDiv || !visitInfoDiv) return;

    // Show the sections
    patientInfoDiv.style.display = 'block';
    visitInfoDiv.style.display = 'block';

    patientInfoDiv.innerHTML = `
      <h3>Patient Information</h3>
      <p><strong>Name:</strong> ${patient.fullName}</p>
      <p><strong>Age:</strong> ${patient.age}</p>
      <p><strong>Gender:</strong> ${patient.gender}</p>
      <p><strong>Phone:</strong> ${patient.phone}</p>
    `;

    const emergencyBadge = patient.emergency === 'Yes' ? '<span style="color: red; font-weight: bold;">🚨 EMERGENCY</span>' : patient.emergency === 'Urgent' ? '<span style="color: orange; font-weight: bold;">⚠️ URGENT</span>' : '<span style="color: green;">✓ Routine</span>';

    visitInfoDiv.innerHTML = `
      <h3>Visit Details</h3>
      <p><strong>Symptoms:</strong> ${patient.symptoms}</p>
      <p><strong>Services Needed:</strong> ${patient.services || 'Not specified'}</p>
      <p><strong>Priority Status:</strong> ${emergencyBadge}</p>
      <p><strong>Check-in Date:</strong> ${patient.date}</p>
      <p><strong>Current Status:</strong> ${patient.status || 'Waiting'}</p>
    `;

    // Show feedback section if it exists
    const feedbackSection = document.getElementById('feedbackSection');
    if (feedbackSection) {
      feedbackSection.style.display = 'block';
    }

    // Hide login section if it exists
    const loginSection = document.getElementById('loginSection');
    if (loginSection) {
      loginSection.style.display = 'none';
    }

    // Populate recent check-ins on dashboard if table exists
    populateRecentCheckIns();
  }

  // ===============================
  // 📊 POPULATE RECENT CHECK-INS TABLE
  // ===============================
  function populateRecentCheckIns() {
    const tableBody = document.getElementById('recentCheckinsBody');
    if (!tableBody) return;

    const patients = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    
    if (patients.length === 0) {
      tableBody.innerHTML = '<tr><td colspan="5">No recent check-ins yet.</td></tr>';
      return;
    }

    // Show last 10 check-ins
    const recentPatients = patients.slice(-10).reverse();
    
    tableBody.innerHTML = recentPatients.map((patient, index) => {
      const statusColor = patient.emergency === 'Yes' ? '#ff4444' : patient.emergency === 'Urgent' ? '#ff9900' : '#00aa00';
      const statusText = patient.emergency === 'Yes' ? 'Emergency' : patient.emergency === 'Urgent' ? 'Urgent' : 'Waiting';
      return `
        <tr>
          <td>${patients.length - patients.indexOf(patient)}</td>
          <td>${patient.fullName}</td>
          <td>${patient.age}</td>
          <td>${patient.date.split(',')[1]?.trim() || patient.date}</td>
          <td><span style="color: ${statusColor}; font-weight: bold;">${statusText}</span></td>
        </tr>
      `;
    }).join('');
  }

  // Call on page load to populate table
  populateRecentCheckIns();

  // ===============================
  // 🧾 CHECK-IN PAGE LOGIC
  // ===============================
  const checkInForm = document.getElementById('checkInForm');

  if (checkInForm) {
    checkInForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = {
        id: Date.now(),
        fullName: document.getElementById('fullName').value,
        age: document.getElementById('age').value,
        gender: document.getElementById('gender').value,
        phone: document.getElementById('phone').value,
        symptoms: document.getElementById('symptoms').value,
        emergency: document.getElementById('emergency').value,
        services: document.getElementById('services').value,
        status: 'Waiting',
        date: new Date().toLocaleString()
      };

      if (!formData.fullName || !formData.age || !formData.emergency || !formData.services) {
        alert("Please fill all required fields");
        return;
      }

      const patients = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
      patients.push(formData);

      localStorage.setItem(STORAGE_KEY, JSON.stringify(patients));

      // Track current patient
      localStorage.setItem("currentPatientId", formData.id);

      alert("Check-in successful! You will be redirected to My Visit page.");

      checkInForm.reset();

      // Announce to screen reader
      if (typeof announceChange === 'function') {
        announceChange("Check-in successful. Redirecting to My Visit page.");
      }

      // Redirect to My Visit
      setTimeout(() => {
        window.location.href = "myVisit.html";
      }, 1500);
    });
  }

  // ===============================
  // 🔐 LOGIN (MY VISIT PAGE)
  // ===============================
  const loginForm = document.getElementById('loginForm');
  const loginMessage = document.getElementById('loginMessage');

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const phone = document.getElementById('loginPhone').value.trim();
      const patients = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

      if (!phone) {
        if (loginMessage) loginMessage.textContent = "Please enter your phone number";
        return;
      }

      const patient = patients.find(p => p.phone == phone);

      if (!patient) {
        if (loginMessage) loginMessage.textContent = "Patient not found. Please check-in first.";
        return;
      }

      localStorage.setItem("currentPatientId", patient.id);

      // Show success message
      if (loginMessage) loginMessage.textContent = "Login successful!";

      // Display patient information and show sections
      displayPatient(patient);

      // Announce to screen reader
      if (typeof announceChange === 'function') {
        announceChange("Login successful. Patient information and visit details are now displayed.");
      }
    });
  }
  // Auto-load if already logged in
  const currentPatientId = localStorage.getItem("currentPatientId");

  if (currentPatientId && patientInfoDiv) {
    const patients = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    const patient = patients.find(p => p.id == currentPatientId);

    if (patient) {
      displayPatient(patient);
    }
  }

  // ===============================
  // 💬 FEEDBACK
  // ===============================
  const feedbackForm = document.getElementById('feedbackForm');

  if (feedbackForm) {
    feedbackForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const feedback = document.getElementById('feedbackText').value;
      const rating = document.getElementById('rating').value;

      if (!feedback || !rating) {
        alert("Please fill all feedback fields");
        return;
      }

      const feedbackData = {
        patientId: currentPatientId,
        feedback,
        rating,
        date: new Date().toLocaleString()
      };

      const list = JSON.parse(localStorage.getItem(FEEDBACK_KEY)) || [];
      list.push(feedbackData);

      localStorage.setItem(FEEDBACK_KEY, JSON.stringify(list));

      alert("Thank you for your feedback!");
      feedbackForm.reset();

      // Announce to screen reader
      if (typeof announceChange === 'function') {
        announceChange("Feedback submitted successfully. Thank you for your input.");
      }
    });
  }
});