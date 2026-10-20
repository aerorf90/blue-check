BLUE DETECTED — WEBSITE + API (REFRESHED UI)

This archive contains the public website, Node.js server, staff dashboard, seller key management, download page, and legal pages.

Requirements: Node.js 18+ and MongoDB (if configured/required by your deployment).
Install: npm install
Run: npm start

Configure environment variables before use: ADMIN_TOKEN (strong secret), SESSION_SECRET, DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET, BASE_URL, DOWNLOAD_URL, DISCORD_INVITE, CONTACT_EMAIL, RETENTION_DAYS, PORT, MONGODB_URI.

IMPORTANT: This ZIP updates the site files, not your already-published hosting automatically. Deploy these files to the same hosting/server and restart the Node.js service to see the new design online. Test locally first. Never commit ADMIN_TOKEN or Discord secrets. Serve production traffic over HTTPS.

Security: reports are indicators for staff review, not automatic proof of cheating. Obtain player consent before checks. The frontend relies on the existing server.js API routes; those routes have not been rewritten in this UI refresh.
