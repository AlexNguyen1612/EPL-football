import { Component, OnInit } from '@angular/core';
import { PersonalService } from '../Personal.service';
import { Teams } from '../Teams';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {
  fixtures: Teams[];
  fixture: Teams[];
  team: Teams[];
  sequence = [38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  
  total = 0;

  snameA: string;
  snameH: string;
  
  crestA: string;
  crestH: string;

  match = 38;

  constructor(private personalService: PersonalService) { }

  ngOnInit() {
  	this.getFixtures();
    this.getTeam();
  }
  
  getMatchDay(matchDay: number) {
    this.match = matchDay;
  }

  getFixtures(): void {
  	this.personalService.getTeam().subscribe(data => this.fixtures = data);
  }

  getTeam(): void {
    this.personalService.getTeam2().subscribe(data => this.team = data);
  }

  getFixture(url: string): void {
    this.personalService.getUrls(url);
    this.personalService.getH().subscribe(data => this.fixture = data);
  }

  getACrest(crest :string) {
    this.crestA = crest;
  }

  getHCrest(crest: string) {
    this.crestH = crest;
  }

  getSNA(name: string) {
    this.snameA = name;
  }

  getSNH(name: string) {
    this.snameH = name;
  }

  totalGoals(totalGoals: number): void {
    if (totalGoals > this.total) {
      this.total = totalGoals;
    }
  }

 

}
