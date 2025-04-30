// --- Get References to Elements ---
const toggleSwitch = document.getElementById('toggleSwitch');
const statusText = document.getElementById('statusText');
const reloadButton = document.getElementById('reloadButton');

// --- Initialization ---
chrome.storage.sync.get(['isEnabled'], (result) => {
  const isEnabled = result.isEnabled === undefined ? true : result.isEnabled;
  toggleSwitch.checked = isEnabled;
  updateStatusText(isEnabled);
  console.log('Popup: Initial state loaded:', isEnabled);
});


toggleSwitch.addEventListener('change', () => {
  const newState = toggleSwitch.checked;
  chrome.storage.sync.set({ isEnabled: newState }, () => {
    updateStatusText(newState);
    console.log('Popup: State saved:', newState);
  });
});

reloadButton.addEventListener('click', async () => {
  console.log('Reload button clicked');
  try {3
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    if (tab && tab.id) {
      console.log(`Reloading tab ID: ${tab.id}`);
      await chrome.tabs.reload(tab.id);
    } else {
      console.error('Could not find active tab to reload.');
    }
  } catch (error) {
    console.error('Error querying or reloading tab:', error);
  }
});

function updateStatusText(isEnabled) {
    statusText.textContent = isEnabled ? 'Enabled' : 'Disabled';
    statusText.style.color = isEnabled ? 'green' : 'red';
}

console.log("Popup script loaded.");

function updateStatusText(isEnabled) {
    statusText.textContent = isEnabled ? 'Enabled' : 'Disabled';

    statusText.style.color = isEnabled ? '#198754' : '#dc3545';
}