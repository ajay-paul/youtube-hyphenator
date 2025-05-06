# Youtube-hyphenator

![icon128](https://github.com/user-attachments/assets/9c4b2acd-04f9-4384-a002-3d47a8a1f1e3)


**Watch YouTube without interruptions** This simple Chrome extension offers a potential method for an **interruption free YouTube experience**.

**Disclaimer:** This relies on the external `yout-ube.com` service, **not affiliated with YouTube/Google**.

## Installation Instructions

Since this extension is not on the Chrome Web Store, you need to load it manually as an "unpacked extension":

1.  **Download/Clone the Repository:**
    *   **Option A (Download ZIP):** Click the green/blue "Code" button on the GitHub repository page, then click "Download ZIP". Extract the contents of the ZIP file to a folder on your computer (e.g., `youtube-hyphenator`).
    *   **Option B (Git Clone):** If you have Git installed, open a terminal or command prompt and run:
        ```bash
        git clone https://github.com/ajay-paul/youtube-hyphenator.git youtube-hyphenator-extension
        ```

2.  **Open Chrome Extensions Page:**
    *   Open the Google Chrome browser.
    *   Click the three dots (⋮) in the top-right corner of the browser -> select the Extensions option (🧩), then click Manage Extensions. **OR** Type `chrome://extensions` into the address bar and press Enter.

3.  **Enable Developer Mode:**
    *   Look for the "Developer mode" toggle switch, usually located in the top-right corner of the Extensions page.
    *   Make sure this switch is **ON**.

4.  **Load the Extension:**
    *   Click the "Load unpacked" button that appears (usually on the top-left).
    *   A file browser window will open. Navigate to and select the folder where you downloaded or cloned the extension files (the `youtube-hyphenator-extension` folder containing `manifest.json`, `background.js`, etc.). **Select the entire folder, not individual files inside it.**
    *   Click "Select Folder" or "Open".

5.  **Confirm Installation:**
    *   The "YouTube URL Hyphenator" extension should now appear in your list of extensions.
    *   Ensure the toggle switch next to it on the `chrome://extensions` page is enabled (usually blue).
    *   The extension's icon should appear in your Chrome toolbar.

## How to Use

1.  **Pin the Extension (Recommended):**
    *   Click the puzzle piece icon (`🧩`) in your Chrome toolbar (near the address bar). This shows all your installed extensions.
    *   Find "YouTube URL Hyphenator" in the list.
    *   Click the pin icon (`📌`) next to it. This will keep the extension's icon visible directly on the toolbar for easy access.

2.  **Navigate to YouTube:**
    *   Go to `youtube.com` or click on any YouTube video link.
    *   Enable the toggle button in the pop-up and press refresh button
    *   Enable pin to toolbar option for easy access
    *   **If the video shows "This video is not available"** or similar errors: **Try reloading the page ** 
    *   If reloading doesn't work after several attempts, the video might genuinely be unavailable via the `yout-ube.com` method, or the service itself might be down or malfunctioning.
  

3.  **Using the Toggle:**
    *   Click the extension's icon in your toolbar.
    *   A small popup window will appear with a toggle switch showing "Enabled" or "Disabled".
    *   **Enable:** If the toggle is off ("Disabled"), click it to turn the redirection **ON**. The extension will now redirect `youtube.com` URLs.
    *   **Disable:** If the toggle is on ("Enabled"), click it to turn the redirection **OFF**. The extension will stop redirecting, and `youtube.com` will load normally.


## License

MIT License
