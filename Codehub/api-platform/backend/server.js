const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'user_1',
    password: 'DB_C0idezgjflrf-jflèflfjff_dçdjçjdo47925jitjg',
    database: "api_platform"
});

db.connect((err) => {
    if (err) {
        console.error('Erreur dde connexion à la base de donnée:', err);
    } else {
        console.log('Connecté à la base de données MySQL');
    }
});

const createTableQuery = `
CREATE TABLE IF NOT EXISTS apis (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    code TEXT,
    laguage VARCHAR(50)
)
`;

db.query(createTableQUery, (err) => {
    if (err) {
        console.error('Erreur lors de la création de la table :', err);
    } else {
        console.log('Table créée avec succès');
    }
});

app.post('/api/create', (req, res) => {
    const { title, description, code, language } = req.body;
    const insertQuery = `
    INSERT INTO apis (title, description, code, language)
    VALUES (?, ?, ?, ?)
    `;
    db.query(insertQuery, [title, description, code, language], (err, result) => {
        if (err) {
          console.error('Erreur lors de la création de l\'API :', err);
          res.status(500).send(err);
        } else {
          console.log('API créée avec succès');
          res.status(200).json(result);
        }
      });
    });

    app.get('/api/list', (req, res) => {
        if (err) {
            console.error('Erreur lors de la récupération de la liste des APIs :', err);
         } else {
            console.log('Liste des APIs récupérée avec succès');
            res.status(200).json(result);
         };

    });

    app.listen(PORT, () => {
        console.log('Server is running on port $(PORT)');
    });

    