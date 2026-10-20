BLUE DETECTED — SITE + API

Ce dossier contient le site web, le serveur Node.js, le tableau de bord des propriétaires de serveurs, les pages légales et le système de clés.

Installation :
1. Installer Node.js 18 ou supérieur.
2. Dans ce dossier, exécuter : npm install
3. Définir ADMIN_TOKEN avec une longue valeur secrète.
4. Configurer DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET et BASE_URL pour OAuth Discord.
5. Configurer DOWNLOAD_URL vers le ZIP du scanner Blue Detected.
6. Démarrer avec : npm start

Variables utiles : ADMIN_TOKEN (obligatoire), SESSION_SECRET, DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET, BASE_URL, DOWNLOAD_URL, DISCORD_INVITE, CONTACT_EMAIL, RETENTION_DAYS, PORT, MONGODB_URI.

Sécurité : servir uniquement en HTTPS en production; ne jamais publier ADMIN_TOKEN ou les secrets Discord. Les résultats d'analyse sont des indicateurs à examiner par le staff, pas une preuve automatique.
