// Classes
var Partecipante = /** @class */ (function () {
    function Partecipante(nome, cognome, paeseDiOrigine, livelloDiIstruzione, competenzeLinguistiche, ambitoDiFormazioneDiInteresse) {
        this.corsiIscritti = [];
        this.nome = nome;
        this.cognome = cognome;
        this.paeseDiOrigine = paeseDiOrigine;
        this.livelloDiIstruzione = livelloDiIstruzione;
        this.competenzeLinguistiche = competenzeLinguistiche;
        this.ambitoDiFormazioneDiInteresse = ambitoDiFormazioneDiInteresse;
    }
    Partecipante.prototype.iscrivitiCorso = function (corso) {
        this.corsiIscritti.push(corso);
        corso.aggiungiPartecipante(this);
    };
    return Partecipante;
}());
var Corso = /** @class */ (function () {
    function Corso(titolo, descrizione, settoreProfessionale, durata) {
        this.iscritti = [];
        this.titolo = titolo;
        this.descrizione = descrizione;
        this.settoreProfessionale = settoreProfessionale;
        this.durata = durata;
    }
    Corso.prototype.aggiungiPartecipante = function (partecipante) {
        this.iscritti.push(partecipante);
    };
    return Corso;
}());
var Azienda = /** @class */ (function () {
    function Azienda(nomeAzienda, settoreDiAttivita, descrizione, posizioniAperte) {
        this.nomeAzienda = nomeAzienda;
        this.settoreDiAttivita = settoreDiAttivita;
        this.descrizione = descrizione;
        this.posizioniAperte = posizioniAperte;
    }
    Azienda.prototype.offriPosizione = function (partecipante, posizione) {
        console.log("L'azienda ".concat(this.nomeAzienda, " offre la posizione ").concat(posizione, " a ").concat(partecipante.nome, " ").concat(partecipante.cognome));
    };
    return Azienda;
}());
// Instances
var partecipante1 = new Partecipante("Mario", "Guede", "Senegal", "Diploma", ["Italiano", "Inglese"], "Informatica");
var partecipante2 = new Partecipante("Emiliane", "Bianchi", "Romania", "Laurea", ["Italiano", "Francese"], "Marketing");
var corso1 = new Corso("Programmazione Java", "Corso di programmazione Java", "Informatica", 3);
var corso2 = new Corso("Marketing Digitale", "Corso di marketing digitale", "Marketing", 2);
var azienda1 = new Azienda("ABC Srl", "Informatica", "Azienda di sviluppo software", ["Sviluppatore Java", "Analista di sistema"]);
// Test
partecipante1.iscrivitiCorso(corso1);
partecipante2.iscrivitiCorso(corso2);
console.log("Partecipanti iscritti al corso 1:");
corso1.iscritti.forEach(function (partecipante) {
    console.log("".concat(partecipante.nome, " ").concat(partecipante.cognome));
});
console.log("Partecipanti iscritti al corso 2:");
corso2.iscritti.forEach(function (partecipante) {
    console.log("".concat(partecipante.nome, " ").concat(partecipante.cognome));
});
azienda1.offriPosizione(partecipante1, "Sviluppatore Java");
azienda1.offriPosizione(partecipante2, "Analista di sistema");
