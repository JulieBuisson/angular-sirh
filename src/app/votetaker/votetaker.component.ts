import { Component } from '@angular/core';

@Component({
  selector: 'app-votetaker',
  template: `
  <h2>Doit on mettre en place des cours de sport en entreprise ?</h2>
  <h3>Oui: {{agreed}} Non: {{disagreed}}</h3>
  <app-voter *ngFor="let voter of voters" [name]="voter" (voted)="onVoted($event)"></app-voter>
  `
})
export class VotetakerComponent {

  agreed = 0;
  disagreed = 0;
  voters = ['Anas', 'Julie', 'Houda', 'Assa', 'Sonia', 'Mohamed'];

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }

}
