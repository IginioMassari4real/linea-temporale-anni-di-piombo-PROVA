import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {
  events = [
    {
      year: 1969,
      eventi_anno: [
        { title: 'Strage di Piazza Fontana', details: '12 dicembre: Bomba nella Banca Nazionale dell\'Agricoltura a Milano. 17 morti.' }
      ]
    },
    {
      year: 1970,
      eventi_anno: [
        { title: 'Golpe Borghese', details: '7-8 dicembre: Tentativo di colpo di Stato fallito.' }
      ]
    },
    {
      year: 1972,
      eventi_anno: [
        { title: 'Strage di Peteano', details: '31 maggio: Autobomba a Peteano (Gorizia), 3 carabinieri uccisi.' }
      ]
    },
    {
      year: 1973,
      eventi_anno: [
        { title: 'Strage della Questura di Milano', details: '17 maggio: Attentato anarchico di Gianfranco Bertoli, 4 morti.' }
      ]
    },
    {
      year: 1974,
      eventi_anno: [
        { title: 'Strage di Piazza della Loggia', details: '28 maggio: Attentato neofascista a Brescia, 8 morti.' },
        { title: 'Strage dell\'Italicus', details: '4 agosto: Attentato sul treno Roma-Brennero, 12 morti.' }
      ]
    },
    {
      year: 1977,
      eventi_anno: [
        { title: 'Omicidio di Francesco Lorusso', details: '11 marzo: Studente ucciso a Bologna durante scontri tra studenti e polizia.' }
      ]
    },
    {
      year: 1978,
      eventi_anno: [
        { title: 'Rapimento e morte di Aldo Moro', details: '16 marzo: Rapimento da parte delle Brigate Rosse. 9 maggio: Ritrovato morto in via Caetani.' }
      ]
    },
    {
      year: 1980,
      eventi_anno: [
        { title: 'Strage della Stazione di Bologna', details: '2 agosto: Bomba alla stazione di Bologna, 85 morti.' }
      ]
    },
    {
      year: 1981,
      eventi_anno: [
        { title: 'Scoperta della lista P2', details: '17 marzo: Scoperta della loggia massonica P2, coinvolta in trame eversive.' }
      ]
    },
    {
      year: 1982,
      eventi_anno: [
        { title: 'Omicidio del generale Dalla Chiesa', details: '3 settembre: Carlo Alberto Dalla Chiesa ucciso a Palermo dalla mafia.' }
      ]
    },
    {
      year: 1984,
      eventi_anno: [
        { title: 'Strage del Rapido 904', details: '23 dicembre: Bomba sul treno Napoli-Milano, 16 morti.' }
      ]
    },
    {
      year: 1988,
      eventi_anno: [
        { title: 'Omicidio di Roberto Ruffilli', details: '16 aprile: Professore ucciso dalle Brigate Rosse a Forlì.' }
      ]
    }
  ];

  selectedEvent: any = null;
  preview: any = null;

  selectEvent(event: any) {
    this.selectedEvent = event;
    this.preview = null; // Rimuovi l'anteprima se l'utente seleziona un evento
  }

  closeDetails() {
    this.selectedEvent = null;
  }

  onMouseOver(event: any) {
    // Prendi l'anteprima del primo evento di quell'anno
    const firstEvent = event.eventi_anno[0];
    const previewText = firstEvent.details.length > 50 ? firstEvent.details.substring(0, 50) + '...' : firstEvent.details;

    this.preview = {
      year: event.year,
      previewText: previewText
    };
  }

  onMouseOut() {
    this.preview = null; // Rimuovi l'anteprima quando il mouse esce
  }
}