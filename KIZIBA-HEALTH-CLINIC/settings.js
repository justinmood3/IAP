document.addEventListener('DOMContentLoaded', () => {

  const clinicTitle = document.getElementById('clinicTitle');
  const clinicNameInput = document.getElementById('clinicNameInput');
  const saveNameBtn = document.getElementById('saveName');

  const lightBtn = document.getElementById('lightTheme');
  const darkBtn = document.getElementById('darkTheme');

  // New accessibility controls
  const decreaseTextBtn = document.getElementById('decreaseText');
  const increaseTextBtn = document.getElementById('increaseText');
  const currentTextSizeSpan = document.getElementById('currentTextSize');
  const toggleContrastBtn = document.getElementById('toggleContrast');
  const colorSchemeSelect = document.getElementById('colorScheme');
  const toggleMotionBtn = document.getElementById('toggleMotion');
  const toggleScreenReaderBtn = document.getElementById('toggleScreenReader');
  const toggleKeyboardNavBtn = document.getElementById('toggleKeyboardNav');
  const resetSettingsBtn = document.getElementById('resetSettings');

  // =========================
  // 🏥 LOAD SAVED NAME
  // =========================
  const savedName = localStorage.getItem("clinicName");
  if (savedName && clinicTitle) {
    clinicTitle.textContent = savedName;
  }
  if (clinicNameInput) {
    clinicNameInput.value = savedName || "";
  }

  // SAVE NAME
  if (saveNameBtn) {
    saveNameBtn.addEventListener('click', () => {
      const name = clinicNameInput.value;

      if (!name) {
        alert("Please enter clinic name");
        return;
      }

      localStorage.setItem("clinicName", name);
      if (clinicTitle) clinicTitle.textContent = name;

      // Announce change for screen readers
      announceChange("Clinic name updated to " + name);
      alert("Clinic name updated!");
    });
  }

  // =========================
  // 🎨 THEME SYSTEM
  // =========================
  function setTheme(theme) {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
    announceChange("Theme changed to " + theme + " mode");
  }

  if (lightBtn) {
    lightBtn.addEventListener('click', () => {
      setTheme("light");
    });
  }

  if (darkBtn) {
    darkBtn.addEventListener('click', () => {
      setTheme("dark");
    });
  }

  // =========================
  // 📝 TEXT SIZE CONTROLS
  // =========================
  let textScale = parseFloat(localStorage.getItem("textScale")) || 1;

  function updateTextSize() {
    document.documentElement.style.setProperty('--text-scale', textScale);
    localStorage.setItem("textScale", textScale);

    // Update display
    let sizeLabel = "Normal";
    if (textScale < 0.8) sizeLabel = "Small";
    else if (textScale > 1.2) sizeLabel = "Large";
    else if (textScale > 1.4) sizeLabel = "Extra Large";

    if (currentTextSizeSpan) currentTextSizeSpan.textContent = sizeLabel;
    announceChange("Text size changed to " + sizeLabel.toLowerCase());
  }

  if (decreaseTextBtn) {
    decreaseTextBtn.addEventListener('click', () => {
      if (textScale > 0.5) {
        textScale -= 0.1;
        updateTextSize();
      }
    });
  }

  if (increaseTextBtn) {
    increaseTextBtn.addEventListener('click', () => {
      if (textScale < 2.0) {
        textScale += 0.1;
        updateTextSize();
      }
    });
  }

  // =========================
  // 🎯 HIGH CONTRAST MODE
  // =========================
  let highContrast = localStorage.getItem("highContrast") === "true";

  function updateContrast() {
    if (highContrast) {
      document.body.classList.add("high-contrast");
      if (toggleContrastBtn) toggleContrastBtn.textContent = "Disable High Contrast";
      announceChange("High contrast mode enabled");
    } else {
      document.body.classList.remove("high-contrast");
      if (toggleContrastBtn) toggleContrastBtn.textContent = "Enable High Contrast";
      announceChange("High contrast mode disabled");
    }
    localStorage.setItem("highContrast", highContrast);
  }

  if (toggleContrastBtn) {
    toggleContrastBtn.addEventListener('click', () => {
      highContrast = !highContrast;
      updateContrast();
    });
  }

  // =========================
  // 🌈 COLOR SCHEME
  // =========================
  let colorScheme = localStorage.getItem("colorScheme") || "default";

  function updateColorScheme() {
    // Remove previous color scheme classes
    document.body.classList.remove("color-deuteranopia", "color-protanopia", "color-tritanopia", "color-monochrome");

    if (colorScheme !== "default") {
      document.body.classList.add("color-" + colorScheme);
    }

    localStorage.setItem("colorScheme", colorScheme);
    announceChange("Color scheme changed to " + colorScheme);
  }

  if (colorSchemeSelect) {
    colorSchemeSelect.addEventListener('change', (e) => {
      colorScheme = e.target.value;
      updateColorScheme();
    });
  }

  // =========================
  // 🎭 MOTION PREFERENCES
  // =========================
  let reducedMotion = localStorage.getItem("reducedMotion") === "true";

  function updateMotion() {
    if (reducedMotion) {
      document.body.classList.add("reduced-motion");
      if (toggleMotionBtn) toggleMotionBtn.textContent = "Enable Motion";
      announceChange("Reduced motion enabled");
    } else {
      document.body.classList.remove("reduced-motion");
      if (toggleMotionBtn) toggleMotionBtn.textContent = "Reduce Motion";
      announceChange("Motion restored");
    }
    localStorage.setItem("reducedMotion", reducedMotion);
  }

  if (toggleMotionBtn) {
    toggleMotionBtn.addEventListener('click', () => {
      reducedMotion = !reducedMotion;
      updateMotion();
    });
  }

  // =========================
  // 🎧 SCREEN READER ENHANCEMENTS
  // =========================
  let screenReaderEnhanced = localStorage.getItem("screenReaderEnhanced") === "true";

  function updateScreenReaderMode() {
    if (screenReaderEnhanced) {
      document.body.classList.add("screen-reader-enhanced");
      if (toggleScreenReaderBtn) toggleScreenReaderBtn.textContent = "Disable Enhanced Mode";
      announceChange("Enhanced screen reader mode enabled");
    } else {
      document.body.classList.remove("screen-reader-enhanced");
      if (toggleScreenReaderBtn) toggleScreenReaderBtn.textContent = "Enhanced Mode";
      announceChange("Enhanced screen reader mode disabled");
    }
    localStorage.setItem("screenReaderEnhanced", screenReaderEnhanced);
  }

  if (toggleScreenReaderBtn) {
    toggleScreenReaderBtn.addEventListener('click', () => {
      screenReaderEnhanced = !screenReaderEnhanced;
      updateScreenReaderMode();
    });
  }

  // =========================
  // ⌨️ KEYBOARD NAVIGATION
  // =========================
  let enhancedFocus = localStorage.getItem("enhancedFocus") === "true";

  function updateKeyboardNav() {
    if (enhancedFocus) {
      document.body.classList.add("enhanced-focus");
      if (toggleKeyboardNavBtn) toggleKeyboardNavBtn.textContent = "Disable Enhanced Focus";
      announceChange("Enhanced keyboard navigation enabled");
    } else {
      document.body.classList.remove("enhanced-focus");
      if (toggleKeyboardNavBtn) toggleKeyboardNavBtn.textContent = "Enhanced Focus";
      announceChange("Enhanced keyboard navigation disabled");
    }
    localStorage.setItem("enhancedFocus", enhancedFocus);
  }

  if (toggleKeyboardNavBtn) {
    toggleKeyboardNavBtn.addEventListener('click', () => {
      enhancedFocus = !enhancedFocus;
      updateKeyboardNav();
    });
  }

  // =========================
  // 🔄 RESET ALL SETTINGS
  // =========================
  if (resetSettingsBtn) {
    resetSettingsBtn.addEventListener('click', () => {
      if (confirm("Are you sure you want to reset all accessibility settings to defaults?")) {
        // Reset all settings
        localStorage.removeItem("clinicName");
        localStorage.removeItem("theme");
        localStorage.removeItem("textScale");
        localStorage.removeItem("highContrast");
        localStorage.removeItem("colorScheme");
        localStorage.removeItem("reducedMotion");
        localStorage.removeItem("screenReaderEnhanced");
        localStorage.removeItem("enhancedFocus");

        // Reset to defaults
        if (clinicTitle) clinicTitle.textContent = "KIZIBA HEALTH CLINIC";
        if (clinicNameInput) clinicNameInput.value = "";
        textScale = 1;
        highContrast = false;
        colorScheme = "default";
        reducedMotion = false;
        screenReaderEnhanced = false;
        enhancedFocus = false;

        // Update UI
        updateTextSize();
        updateContrast();
        updateColorScheme();
        updateMotion();
        updateScreenReaderMode();
        updateKeyboardNav();

        // Reset theme
        document.body.className = "";

        announceChange("All settings reset to defaults");
        alert("All settings have been reset to defaults!");
      }
    });
  }

  // =========================
  // 🔊 SCREEN READER ANNOUNCEMENTS
  // =========================
  function announceChange(message) {
    // Create a temporary element for screen reader announcement
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;

    document.body.appendChild(announcement);

    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }

  // =========================
  // 🚀 INITIALIZE SETTINGS
  // =========================
  function initializeSettings() {
    // Load saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.body.className = savedTheme;
    }

    // Initialize text size
    updateTextSize();

    // Initialize contrast
    updateContrast();

    // Initialize color scheme
    if (colorSchemeSelect) colorSchemeSelect.value = colorScheme;
    updateColorScheme();

    // Initialize motion
    updateMotion();

    // Initialize screen reader mode
    updateScreenReaderMode();

    // Initialize keyboard navigation
    updateKeyboardNav();
  }

  // Initialize all settings on page load
  initializeSettings();

});