import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Teams } from './teams';
import { League } from './league';
import { Fixture } from './fixture';

const httpOptions = {
  headers: new HttpHeaders({ 'X-Auth-Token': '73beceddbe3347b98a24d19bd80e383d' })
};

@Injectable()
export class PersonalService {
  private url = 'https://api.football-data.org/v1/competitions/445/fixtures';

  private detail = 'https://api.football-data.org/v1/fixtures/';

  private url2 = 'https://api.football-data.org/v1/competitions/445/teams';
  
  private urls: string;
  
  private awayCrest: string;
  
  private homeCrest: string;
  
  team: Teams;
  
  private leagueUrl = 'https://api.football-data.org/v1/competitions/445/leagueTable';

  private fixturesUrl = 'https://api.football-data.org/v1/competitions/445/fixtures';
  
  constructor(private http: HttpClient) { }

  getTeam(): Observable<Teams[]> {
    return this.http.get<Teams[]>(this.url, httpOptions);  
  }

  getTeam2() : Observable<Teams[]> {
    return this.http.get<Teams[]>(this.url2, httpOptions);
  }

  getUrls(urlss: string): void {
  	this.urls = urlss;
  	//console.log("service getUrls used", this.urls);
  }

  getCrest(crest1: string, crest2: string): void {
    this.awayCrest = crest1;
    this.homeCrest = crest2;
    //console.log("service getCrest used", this.awayCrest, this.homeCrest);
  }

  getDetail(id: string) {
    console.log("detail in service");
    return this.http.get<Teams[]>(this.detail+id, httpOptions);
  }

  getH(): Observable<Teams[]> {
  	return this.http.get<Teams[]>(this.urls, httpOptions);
  }

  getAc(): Observable<Teams[]> {
    return this.http.get<Teams[]>(this.awayCrest, httpOptions);
  }

  getHc(): Observable<Teams[]> {
    return this.http.get<Teams[]>(this.homeCrest, httpOptions);
  }


  getLeague(): Observable<League[]> {
    console.log("team service getLeague");
    return this.http.get<League[]>(this.leagueUrl, httpOptions);
  }

  getFixtures(): Observable<Teams[]> {
    console.log("inside service getFixtures");
    return this.http.get<Teams[]>(this.fixturesUrl, httpOptions);  
  }
  


  
}
