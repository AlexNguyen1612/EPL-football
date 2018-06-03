import { Component, OnInit } from '@angular/core';
import { TeamDataService } from '../team-data.service';
import {TeamStatistics} from '../team-statistics';
import { TeamFixtures } from '../team-fixtures';
import { Chart } from 'chart.js'
import 'chart.piecelabel.js'

import { PersonalService } from '../Personal.service';

import { League } from '../league';

import { Fixture } from '../fixture';

@Component({
  selector: 'detailed-league-table',
  templateUrl: './detailed-league-table.component.html',
  styleUrls: ['./detailed-league-table.component.css']
})
export class DetailedLeagueTableComponent implements OnInit {
  
  fixtures:Fixture[];
  total:number=0;

  homeIndex1:number=0;
  homeIndex2:number=0;
  homeIndex3:number=0;

  awayIndex1:number=0;
  awayIndex2:number=0;
  awayIndex3:number=0;

  most1HomeGoals:number=0;
  most2HomeGoals:number=0;
  most3HomeGoals:number=0;

  most1AwayGoals:number=0;
  most2AwayGoals:number=0;
  most3AwayGoals:number=0;
  
  standings:League[];


  
  teams : TeamStatistics[];
  fixtures: TeamFixtures[];
  fixturesUrl : string;
  teamResults: number[] = [1,2,3];
   
  pieChart : Chart;
  oilData = {
    labels: [
        "Wins",
        "Draws",
        "Losses"
    ],
    datasets: [
        {
            data: this.teamResults,
            backgroundColor: [
                "#84FF63",
                '#A9A9A9',
                "#FF6384",
            ]
        }]
};

  showDiv : boolean = false;
  getResults(wins: number,draws: number, losses: number): void {
    this.teamResults[0] = wins;
    this.teamResults[1] = draws;
    this.teamResults[2] = losses;
    this.pieChart.update();
  }
  

  constructor(private teamData : TeamDataService,private personalService: PersonalService) { }

  ngOnInit() {
  console.log("execute 2nd time");
    this.getTeams();
    this.pieChart = new Chart('canvas', {
  type: 'pie',
  data: this.oilData,
  options: {
  responsive: true, 
  maintainAspectRatio: false,
  pieceLabel: { render: 'percentage',
  fontColor:'#000000'  },
  title: {
            display: true,
            text: 'Performance chart',
            fontSize: 16
 }
}
});
  
  this.getFixtures();
    this.getLeague();
  
  }
  

  getTeams(): void {
   this.teamData.getTeams().subscribe( teams => this.teams = teams);
  }
  
  getUrl(apiUrl: string): void {
   this.fixturesUrl = apiUrl;
   this.teamData.getUrl(apiUrl);
   this.teamData.getFixtures().subscribe(fixtures =>
   {this.fixtures = fixtures;
   this.showDiv = false;});
  }
  
  showLoader(): void {
   this.showDiv = true;
  }
  
  most1Goals(home:number, away:number, index:number):void {
    if (home>this.most1HomeGoals) {
      this.most1HomeGoals = home;
      this.homeIndex1 = index;
    }

    if (away>this.most1AwayGoals) {
      this.most1AwayGoals = away;
      this.awayIndex1 = index;
    }
  }

  most2Goals(home:number, away:number, index:number):void {
    if (home>this.most2HomeGoals && index!= this.homeIndex1) {
      this.most2HomeGoals = home;
      this.homeIndex2 = index;
    }

    if (away>this.most2AwayGoals && index!= this.awayIndex1) {
      this.most2AwayGoals = away;
      this.awayIndex2 = index;
    }
  }

  most3Goals(home:number, away:number, index:number):void {
    if (home>this.most3HomeGoals && index!= this.homeIndex2 && index!= this.homeIndex1) {
      this.most3HomeGoals = home;
      this.homeIndex3 = index;
    }

    if (away>this.most3AwayGoals && index!= this.awayIndex2 && index!= this.awayIndex1) {
      this.most3AwayGoals = away;
      this.awayIndex3 = index;
    }
  }
  
  getFixtures(): void {
    console.log("inside getFixtures");
  	this.personalService.getFixtures().subscribe(fixtures => this.fixtures = fixtures);
  }

  getLeague():void {
    this.personalService.getLeague().subscribe(standings=>this.standings = standings);
    console.log("getLeague-child component");
  }

}
