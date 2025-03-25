import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {
  events = [
    { year: 1969, title: 'Strage di Piazza Fontana', details: '12 dicembre: Bomba nella Banca Nazionale della Agricoltura a Milano. 17 morti.', show: false },
    { year: 1970, title: 'Golpe Borghese', details: '7-8 dicembre: Tentativo di colpo di Stato fallito.', show: false },
    { year: 1972, title: 'Strage di Peteano', details: '31 maggio: Autobomba a Peteano (Gorizia), 3 carabinieri uccisi.', show: false },
    { year: 1973, title: 'Strage della Questura di Milano', details: '17 maggio: Attentato anarchico di Gianfranco Bertoli, 4 morti.', show: false },
    { year: 1974, title: 'Strage di Piazza della Loggia', details: '28 maggio: Attentato neofascista a Brescia, 8 morti.', show: false },
    { year: 1974, title: 'Strage di Italicus', details: '4 agosto: Attentato sul treno Roma-Brennero, 12 morti.', show: false },
    { year: 1977, title: 'Omicidio di Francesco Lorusso', details: '11 marzo: Studente ucciso a Bologna durante scontri tra studenti e polizia.', show: false },
    { year: 1978, title: 'Rapimento e morte di Aldo Moro', details: '16 marzo: Rapimento da parte delle Brigate Rosse. 9 maggio: Ritrovato morto in via Caetani.', show: false },
    { year: 1980, title: 'Strage della Stazione di Bologna', details: '2 agosto: Bomba alla stazione di Bologna, 85 morti.', show: false },
    { year: 1981, title: 'Scoperta della lista P2', details: '17 marzo: Scoperta della loggia massonica P2, coinvolta in trame eversive.', show: false },
    { year: 1982, title: 'Omicidio del generale Dalla Chiesa', details: '3 settembre: Carlo Alberto Dalla Chiesa ucciso a Palermo dalla mafia.', show: false },
    { year: 1984, title: 'Strage del Rapido 904', details: '23 dicembre: Bomba sul treno Napoli-Milano, 16 morti.', show: false },
    { year: 1988, title: 'Omicidio di Roberto Ruffilli', details: '16 aprile: Professore ucciso dalle Brigate Rosse a Forlì.', show: false }
  ];

  toggleDetails(event: any) {
    event.show = !event.show;
  }
}