const mongoose = require('mongoose');

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/screenshot-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Définir le schéma de capture d'écran
const screenshotSchema = new mongoose.Schema({
  imageData: String,
  userId: String, // Ajout du champ userId
  createdAt: { type: Date, default: Date.now }
});

// Créer le modèle de capture d'écran
const Screenshot = mongoose.model('Screenshot', screenshotSchema);

module.exports = Screenshot;
