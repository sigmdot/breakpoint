import { Injectable } from '@angular/core';
import { Match } from '../../model/match.model';
import { FirestoreService } from '../../services/firestore/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class MatchsService {

  constructor(private firestoreSvc: FirestoreService) { }

  public getAllPublicMatch(){
    return this.firestoreSvc.snapshotCollection<any>('matchs')
  }

  public getMatchsByStatus(estado: string){
    // tslint:disable-next-line: whitespace
    return this.firestoreSvc.snapshotCollection<any>('matchs', ref => ref.where('estado', '==', estado));
  }

  public createMatch(match: Match){
    match.id = this.firestoreSvc.creatId();
    return this.firestoreSvc.addDocument('matchs', match.id, match);
  }
}
