function updateClock() {
  const now = new Date();
  
  // Format hours, minutes, and seconds with zero-padding
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  // Safeguard: Check if element exists before injecting text
  const timeElement = document.getElementById('time');
  const dateElement = document.getElementById('date');

  if (timeElement) {
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
  }
  
  if (dateElement) {
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = now.toLocaleDateString('en-US', dateOptions);
  }
}

// Initialization check to avoid any race conditions
document.addEventListener('DOMContentLoaded', () => {
  updateClock();
  setInterval(updateClock, 1000);
});
