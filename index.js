const express = require('express');
const app = express();
app.use(express.json());

// Log toutes les requêtes en détail
app.use((req, res, next) => {
  console.log('=== REQUETE ===');
  console.log('Method:', req.method);
  console.log('Path:', req.path);
  console.log('Headers:', JSON.stringify(req.headers, null, 2));
  console.log('Body:', JSON.stringify(req.body, null, 2));
  console.log('===============');
  next();
});

app.use((req, res) => {
  res.status(200).json({ status: 'ok', isUpToDate: true, updateRequired: false });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Serveur démarré sur le port ' + PORT);
});