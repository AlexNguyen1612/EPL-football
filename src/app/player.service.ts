import { Injectable } from '@angular/core';
import { Player } from './player';
import { Team } from './team';
import { Fixture } from './fixture';
import { ParentComponent } from './parent/parent.component';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
	headers: new HttpHeaders ({
		'X-Auth-Token': '5da681a8009e409fb383eb80003d08e8'
	})
};

@Injectable()
export class PlayerService {

  private playersUrl: string;

  private fixturesUrl: string;

  constructor(private http: HttpClient) { }

  getLink(link1: string, link2: string): void {
  	console.log("getLink child component ");
  	this.playersUrl = link1;
  	this.fixturesUrl = link2;
  }

  getPlayers(): Observable<Player[]> {
  	console.log("player service");
  	return this.http.get<Player[]>(this.playersUrl, httpOptions);
  }

  getFixtures(): Observable<Fixture[]> {
  	console.log("fixture service");
  	return this.http.get<Fixture[]>(this.fixturesUrl, httpOptions);
  }
 
}
