import { Injectable } from '@angular/core';
import { TeamStatistics } from './team-statistics';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/map';
import { TeamFixtures } from './team-fixtures';


@Injectable()
export class TeamDataService {
  
  teams : TeamStatistics[];
  fixturesUrl : string; 
  fixtures: TeamFixtures[];
  
  constructor( private http : HttpClient ) { };
  
  private teamsUrl = 'https://api.football-data.org/v1/competitions/445/leagueTable';

  private headers ={ headers :{'X-Auth-Token' : 'e5e5a21d678a45f1946601bf724e440a' } };
  
  getTeams(): Observable<TeamStatistics[]> {
   return this.http.get<TeamStatistics[]>(this.teamsUrl,this.headers);
  }
  
  getUrl(apiUrl: string): void{
   this.fixturesUrl = apiUrl.substring(7,apiUrl.length);
   console.log (apiUrl.substring(7,apiUrl.length));
   this.fixturesUrl = "https://" + this.fixturesUrl + "/fixtures";
   console.log(this.fixturesUrl);
  }
  
  getFixtures(): Observable<TeamFixtures[]> {
   return this.http.get<TeamFixtures[]>(this.fixturesUrl,this.headers);
  }
}
