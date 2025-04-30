const toggleSwitch = document.getElementById('toggleSwitch');
const statusText = document.getElementById('statusText');

// --- Initialization ---
chrome.storage.sync.get(['isEnabled'], (result) => {
  // Default to true (enabled) if no setting is stored yet
  const isEnabled = result.isEnabled === undefined ? true : result.isEnabled;
  toggleSwitch.checked = isEnabled;
  updateStatusText(isEnabled);
  console.log('Popup: Initial state loaded:', isEnabled);
});

// --- Event Listener ---
toggleSwitch.addEventListener('change', () => {
  const newState = toggleSwitch.checked;
  chrome.storage.sync.set({ isEnabled: newState }, () => {
    updateStatusText(newState);
    console.log('Popup: State saved:', newState);
  });
});

function updateStatusText(isEnabled) {
    statusText.textContent = isEnabled ? 'Enabled' : 'Disabled';
    statusText.style.color = isEnabled ? 'green' : 'red';
}