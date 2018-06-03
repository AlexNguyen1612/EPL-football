import { Injectable } from '@angular/core';
import { Team } from './team';

import { League } from './league';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
	headers: new HttpHeaders ({
		'X-Auth-Token': '5da681a8009e409fb383eb80003d08e8'
	})
};

@Injectable()
export class TeamService {

  constructor(private http: HttpClient) { }

  private teamsUrl = 'http://api.football-data.org/v1/competitions/445/teams';

  private leagueUrl = 'http://api.football-data.org/v1/competitions/445/leagueTable';

  getTeams(): Observable<Team[]> {
  	console.log("team service");
  	return this.http.get<Team[]>(this.teamsUrl, httpOptions);
  }

  getLeague(): Observable<League[]> {
  	console.log("team service getLeague");
  	return this.http.get<League[]>(this.leagueUrl, httpOptions);
  }

}
