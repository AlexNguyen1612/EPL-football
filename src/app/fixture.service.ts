import { Injectable } from '@angular/core';
import { Fixture } from './fixture';
import { Team } from './team';
import { ParentComponent } from './parent/parent.component';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
	headers: new HttpHeaders ({
		'X-Auth-Token': '5da681a8009e409fb383eb80003d08e8'
	})
};

@Injectable()
export class FixtureService {

  private fixturesUrl: string;

  constructor(private http: HttpClient) { }

  getLink(link: string): void {
  	console.log("getLink fixture dervice ");
  	this.fixturesUrl = link;
  }

  getFixtures(): Observable<Fixture[]> {
  	console.log("fixture service");
  	return this.http.get<Fixture[]>(this.fixturesUrl, httpOptions);
  }
 
}