// Interfaces
interface IPartecipante {
    nome: string;
    cognome: string;
    paeseDiOrigine: string;
    livelloDiIstruzione: string;
    competenzeLinguistiche: string[];
    ambitoDiFormazioneDiInteresse: string;
    iscrivitiCorso(corso: ICorso): void;
  }
  
  interface ICorso {
    titolo: string;
    descrizione: string;
    settoreProfessionale: string;
    durata: number;
    iscritti: IPartecipante[];
    aggiungiPartecipante(partecipante: IPartecipante): void;
  }
  
  interface IAzienda {
    nomeAzienda: string;
    settoreDiAttivita: string;
    descrizione: string;
    posizioniAperte: string[];
    offriPosizione(partecipante: IPartecipante, posizione: string): void;
  }
  
  // Classes
  class Partecipante implements IPartecipante {
    nome: string;
    cognome: string;
    paeseDiOrigine: string;
    livelloDiIstruzione: string;
    competenzeLinguistiche: string[];
    ambitoDiFormazioneDiInteresse: string;
    corsiIscritti: ICorso[] = [];
  
    constructor(nome: string, cognome: string, paeseDiOrigine: string, livelloDiIstruzione: string, competenzeLinguistiche: string[], ambitoDiFormazioneDiInteresse: string) {
      this.nome = nome;
      this.cognome = cognome;
      this.paeseDiOrigine = paeseDiOrigine;
      this.livelloDiIstruzione = livelloDiIstruzione;
      this.competenzeLinguistiche = competenzeLinguistiche;
      this.ambitoDiFormazioneDiInteresse = ambitoDiFormazioneDiInteresse;
    }
  
    iscrivitiCorso(corso: ICorso): void {
      this.corsiIscritti.push(corso);
      corso.aggiungiPartecipante(this);
    }
  }
  
  class Corso implements ICorso {
    titolo: string;
    descrizione: string;
    settoreProfessionale: string;
    durata: number;
    iscritti: IPartecipante[] = [];
  
    constructor(titolo: string, descrizione: string, settoreProfessionale: string, durata: number) {
      this.titolo = titolo;
      this.descrizione = descrizione;
      this.settoreProfessionale = settoreProfessionale;
      this.durata = durata;
    }
  
    aggiungiPartecipante(partecipante: IPartecipante): void {
      this.iscritti.push(partecipante);
    }
  }
  
  class Azienda implements IAzienda {
    nomeAzienda: string;
    settoreDiAttivita: string;
    descrizione: string;
    posizioniAperte: string[];
  
    constructor(nomeAzienda: string, settoreDiAttivita: string, descrizione: string, posizioniAperte: string[]) {
      this.nomeAzienda = nomeAzienda;
      this.settoreDiAttivita = settoreDiAttivita;
      this.descrizione = descrizione;
      this.posizioniAperte = posizioniAperte;
    }
  
    offriPosizione(partecipante: IPartecipante, posizione: string): void {
      console.log(`L'azienda ${this.nomeAzienda} offre la posizione ${posizione} a ${partecipante.nome} ${partecipante.cognome}`);
    }
  }
  
  // Instances
  const partecipante1 = new Partecipante("Mario", "Guede", "Senegal", "Diploma", ["Italiano", "Inglese"], "Informatica");
  const partecipante2 = new Partecipante("Emiliane", "Bianchi", "Romania", "Laurea", ["Italiano", "Francese"], "Marketing");
  const corso1 = new Corso("Programmazione Java", "Corso di programmazione Java", "Informatica", 3);
  const corso2 = new Corso("Marketing Digitale", "Corso di marketing digitale", "Marketing", 2);
  const azienda1 = new Azienda("ABC Srl", "Informatica", "Azienda di sviluppo software", ["Sviluppatore Java", "Analista di sistema"]);
  
  // Test
partecipante1.iscrivitiCorso(corso1);
partecipante2.iscrivitiCorso(corso2);

console.log("Partecipanti iscritti al corso 1:");
corso1.iscritti.forEach((partecipante) => {
  console.log(`${partecipante.nome} ${partecipante.cognome}`);
});

console.log("Partecipanti iscritti al corso 2:");
corso2.iscritti.forEach((partecipante) => {
  console.log(`${partecipante.nome} ${partecipante.cognome}`);
});

azienda1.offriPosizione(partecipante1, "Sviluppatore Java");
azienda1.offriPosizione(partecipante2, "Analista di sistema");