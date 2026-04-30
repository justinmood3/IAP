// Global Accessibility Settings Manager
// This script applies accessibility settings across all pages

// =========================
// 🔊 SCREEN READER ANNOUNCEMENT FUNCTION
// =========================
function announceChange(message) {
  // Remove any existing announcement
  const existingAnnouncement = document.getElementById('sr-announcement');
  if (existingAnnouncement) {
    existingAnnouncement.remove();
  }

  // Create new announcement
  const announcement = document.createElement('div');
  announcement.id = 'sr-announcement';
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;

  document.body.appendChild(announcement);

  // Remove after announcement
  setTimeout(() => {
    if (announcement.parentNode) {
      announcement.parentNode.removeChild(announcement);
    }
  }, 1000);
}

document.addEventListener('DOMContentLoaded', () => {

  // =========================
  // 🎨 APPLY THEME
  // =========================
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.className = savedTheme;
  }

  // =========================
  // 📝 APPLY TEXT SIZE
  // =========================
  const textScale = parseFloat(localStorage.getItem("textScale")) || 1;
  document.documentElement.style.setProperty('--text-scale', textScale);

  // =========================
  // 🎯 APPLY HIGH CONTRAST
  // =========================
  const highContrast = localStorage.getItem("highContrast") === "true";
  if (highContrast) {
    document.body.classList.add("high-contrast");
  }

  // =========================
  // 🌈 APPLY COLOR SCHEME
  // =========================
  const colorScheme = localStorage.getItem("colorScheme") || "default";
  if (colorScheme !== "default") {
    document.body.classList.add("color-" + colorScheme);
  }

  // =========================
  // 🎭 APPLY MOTION PREFERENCES
  // =========================
  const reducedMotion = localStorage.getItem("reducedMotion") === "true";
  if (reducedMotion) {
    document.body.classList.add("reduced-motion");
  }

  // =========================
  // 🎧 APPLY SCREEN READER ENHANCEMENTS
  // =========================
  const screenReaderEnhanced = localStorage.getItem("screenReaderEnhanced") === "true";
  if (screenReaderEnhanced) {
    document.body.classList.add("screen-reader-enhanced");
  }

  // =========================
  // ⌨️ APPLY KEYBOARD NAVIGATION
  // =========================
  const enhancedFocus = localStorage.getItem("enhancedFocus") === "true";
  if (enhancedFocus) {
    document.body.classList.add("enhanced-focus");
  }

  // =========================
  // 🏥 APPLY CLINIC NAME
  // =========================
  const clinicTitle = document.getElementById('clinicTitle');
  const savedName = localStorage.getItem("clinicName");
  if (savedName && clinicTitle) {
    clinicTitle.textContent = savedName;
  }

  // =========================
  // 🔊 PAGE ANNOUNCEMENT ON LOAD
  // =========================
  // Announce page title to screen readers when page loads
  const pageTitle = document.title;
  const mainHeading = document.querySelector('h1, h2')?.textContent || '';

  // Wait a bit for screen readers to be ready
  setTimeout(() => {
    const announcement = `Page loaded: ${pageTitle}${mainHeading ? '. ' + mainHeading : ''}`;
    announceChange(announcement);
  }, 500);

  // =========================
  // ⌨️ ENHANCED KEYBOARD NAVIGATION
  // =========================
  // Add skip links for keyboard users
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.className = 'skip-link sr-only';
  skipLink.textContent = 'Skip to main content';
  document.body.insertBefore(skipLink, document.body.firstChild);

  // Show skip link on focus
  skipLink.addEventListener('focus', () => {
    skipLink.classList.remove('sr-only');
  });

  skipLink.addEventListener('blur', () => {
    skipLink.classList.add('sr-only');
  });

  // =========================
  // 🎯 FOCUS MANAGEMENT
  // =========================
  // Trap focus in modals (if any exist)
  const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

  // Add ARIA labels to common elements if missing
  document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])').forEach(input => {
    const label = document.querySelector(`label[for="${input.id}"]`);
    if (label) {
      input.setAttribute('aria-labelledby', label.id || `label-${input.id}`);
      if (!label.id) {
        label.id = `label-${input.id}`;
      }
    }
  });

  // =========================
  // 📱 RESPONSIVE ACCESSIBILITY
  // =========================
  // Ensure touch targets are adequate on mobile
  if ('ontouchstart' in window) {
    document.querySelectorAll('button, a, input[type="button"], input[type="submit"]').forEach(element => {
      const styles = window.getComputedStyle(element);
      const minSize = 44; // WCAG minimum touch target size

      if (parseInt(styles.height) < minSize || parseInt(styles.width) < minSize) {
        element.style.minHeight = minSize + 'px';
        element.style.minWidth = minSize + 'px';
      }
    });
  }

  // =========================
  // 🔊 ANNOUNCE PAGE LOAD
  // =========================
  // Announce page title for screen readers
  const pageTitle = document.title;
  setTimeout(() => {
    announceChange("Page loaded: " + pageTitle);
  }, 500);

});