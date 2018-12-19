import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
 providedIn: 'root' // acces a la racine de cette partie là
})

export class HeroService {

 constructor(private messageService: MessageService) { }

 //getHeroes(): Hero[]{

   //return HEROES;

 //}  
 
 getHeroes(): Observable<Hero[]> {
   this.messageService.add('HeroService: super j\'ai trouvé des employés');
  return of(HEROES);
 }

 getHero(id: number): Observable<Hero>{
   this.messageService.add('HeroService: super !!');
   return of(HEROES.find(hero => hero.id === id));
 }
}
