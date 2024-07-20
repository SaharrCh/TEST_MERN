const express = require('express');
const bodyParser = require('body-parser');
const Screenshot = require('./db'); // Chemin vers ton fichier db.js
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors()); // Ajoutez cette ligne pour activer CORS

// Middleware pour parser le corps des requêtes JSON
app.use(bodyParser.json({ limit: '10mb' }));

// Route pour enregistrer les captures d'écran
app.post('/api/screenshots', async (req, res) => {
  try {
    const { imageData, userId } = req.body; // Inclure userId
    const screenshot = new Screenshot({ imageData, userId });
    await screenshot.save();
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Route pour récupérer les captures d'écran d'un utilisateur
app.get('/api/screenshots/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const screenshots = await Screenshot.find({ userId });
    res.status(200).json(screenshots);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});
