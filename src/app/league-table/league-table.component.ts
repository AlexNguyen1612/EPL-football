import { Component, OnInit } from '@angular/core';
import { TeamStatistics } from '../team-statistics'
import { TeamDataService } from '../team-data.service'

@Component({
  selector: 'league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.css']
})
export class LeagueTableComponent implements OnInit {
  teams: TeamStatistics[];

  constructor(private teamData : TeamDataService) { }

  ngOnInit() {
   this.getTeams();
  }
  
  getTeams(): void {
   this.teamData.getTeams().subscribe(teams => this.teams = teams);
  }

}
