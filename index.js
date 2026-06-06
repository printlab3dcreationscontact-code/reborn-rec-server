const express = require('express');
const app = express();
app.use(express.json());

// Vérification de version → on dit que tout est OK
app.get('/api/version', (req, res) => {
  res.json({ status: 'ok', updateRequired: false });
});

// Auth → on renvoie un faux token
app.post('/api/auth/login', (req, res) => {
  res.json({ token: 'fake-token-reborn', playerId: 1, username: 'Player' });
});

// Telemetry/analytics → on accepte et on ignore
app.post('/data/events', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Tout le reste → on répond OK pour ne pas bloquer le jeu
app.use((req, res) => {
  console.log('Requête reçue:', req.method, req.path);
  res.status(200).json({ status: 'ok' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Serveur RecRoom démarré sur le port ' + PORT);
});