import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-voter',
  styleUrls: ['./voter.component.css'],
  template: `
  <h4>{{name}}</h4>
  <button (click)="vote(true)" [disabled]="didvote">Oui</button>
  <button (click)="vote(false)" [disabled]="didvote">Non</button>
  `
})
export class VoterComponent {

  @Input() name: string;
  @Output() voted = new EventEmitter<boolean>();
  didvote = false;

  vote(agreed: boolean) {
    this.voted.emit(agreed);
    this.didvote = true;
  }

}
