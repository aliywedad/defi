const mongoose = require('mongoose');

// Définition des schémas
const administrateurSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    email: { type: String, unique: true, required: true }
});

const JerySchema = new mongoose.Schema({
    nom: { type: String, required: true },
    prénom: { type: String, required: true },
    email: { type: String, unique: true, required: true }
});

const etudiantSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    nom: { type: String, required: true },
    prénom: { type: String, required: true },
    spécialité: { type: String, required: true, enum: ['DSI', 'RSS', 'CNM'] },
    niveau: { type: String, required: true, enum: ['L1', 'L2', 'L3', 'M1', 'M2'] }
});

const utilisateurSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    motDePasse: { type: String, required: true },
    role: { type: String, required: true, enum: ['étudiant', 'organisateur', 'jury'] }
});

const équipeSchema = new mongoose.Schema({
    nomEquipe: { type: String, required: true },
    leadID: { type: mongoose.Schema.Types.ObjectId, ref: 'Utilisateur', required: true },
    adjointID: { type: mongoose.Schema.Types.ObjectId, ref: 'Utilisateur', required: true },
    nombreMembres: { type: Number, required: true }
});

const inscriptionSchema = new mongoose.Schema({
    utilisateur: { type: mongoose.Schema.Types.ObjectId, ref: 'Utilisateur', required: true },
    équipe: { type: mongoose.Schema.Types.ObjectId, ref: 'Équipe', required: true },
    role: { type: String, required: true, enum: ['lead', 'adjoint', 'membre'] }
});

const défiSchema = new mongoose.Schema({
    titre: { type: String, required: true },
    desc: { type: String, required: true },
    file: { type: String },
    date_debut: { type: Date, required: true },
    date_fin: { type: Date, required: true }
});

const soumissionSchema = new mongoose.Schema({
    équipe: { type: mongoose.Schema.Types.ObjectId, ref: 'Équipe', required: true },
    défi: { type: mongoose.Schema.Types.ObjectId, ref: 'Défi', required: true },
    lienGit: { type: String, required: true },
    dateSoumission: { type: Date, required: true },
    status: { type: String, required: true, enum: ['soumis', 'évalué'] },
    file: { type: String }
});

const évaluationSchema = new mongoose.Schema({
    soumission: { type: mongoose.Schema.Types.ObjectId, ref: 'Soumission', required: true },
    score: { type: Number, required: true },
    commentaires: { type: String, required: true },
    jury: { type: mongoose.Schema.Types.ObjectId, ref: 'Jery', required: true }
});

const résultatSchema = new mongoose.Schema({
    équipe: { type: mongoose.Schema.Types.ObjectId, ref: 'Équipe', required: true },
    scoreTotal: { type: Number, required: true }
});

const critèreSchema = new mongoose.Schema({
    name: { type: String, required: true },
    score: { type: Number, required: true }
});

const noteSchema = new mongoose.Schema({
    credit: { type: mongoose.Schema.Types.ObjectId, ref: 'Critère', required: true },
    défi: { type: mongoose.Schema.Types.ObjectId, ref: 'Défi', required: true },
    équipe: { type: mongoose.Schema.Types.ObjectId, ref: 'Équipe', required: true },
    score: { type: Number, required: true }
});

const affectationJurySchema = new mongoose.Schema({
    membre_jury: { type: mongoose.Schema.Types.ObjectId, ref: 'Jery', required: true },
    défi: { type: mongoose.Schema.Types.ObjectId, ref: 'Défi', required: true }
});

const grilleEvaluationSchema = new mongoose.Schema({
    defi: { type: mongoose.Schema.Types.ObjectId, ref: 'Défi', required: true },
    critere: { type: mongoose.Schema.Types.ObjectId, ref: 'Critère', required: true },
    coefficient: { type: Number, required: true }
});

const evaluationJurySchema = new mongoose.Schema({
    soumission: { type: mongoose.Schema.Types.ObjectId, ref: 'Soumission', required: true },
    membre_jury: { type: mongoose.Schema.Types.ObjectId, ref: 'Jery', required: true },
    note: { type: Number, required: true }
});

// Modèles MongoDB
const Administrateur = mongoose.model('Administrateur', administrateurSchema);
const Jery = mongoose.model('Jery', JerySchema);
const Etudiant = mongoose.model('Etudiant', etudiantSchema);
const Utilisateur = mongoose.model('Utilisateur', utilisateurSchema);
const Équipe = mongoose.model('Équipe', équipeSchema);
const Inscription = mongoose.model('Inscription', inscriptionSchema);
const Défi = mongoose.model('Défi', défiSchema);
const Soumission = mongoose.model('Soumission', soumissionSchema);
const Évaluation = mongoose.model('Évaluation', évaluationSchema);
const Résultat = mongoose.model('Résultat', résultatSchema);
const Critère = mongoose.model('Critère', critèreSchema);
const Notes = mongoose.model('Notes', noteSchema);
const AffectationJury = mongoose.model('AffectationJury', affectationJurySchema);
const GrilleEvaluation = mongoose.model('GrilleEvaluation', grilleEvaluationSchema);
const EvaluationJury = mongoose.model('EvaluationJury', evaluationJurySchema);

// Export des modèles
module.exports = {
    Administrateur,
    Jery,
    Etudiant,
    Utilisateur,
    Équipe,
    Inscription,
    Défi,
    Soumission,
    Évaluation,
    Résultat,
    Critère,
    Notes,
    AffectationJury,
    GrilleEvaluation,
    EvaluationJury
};
