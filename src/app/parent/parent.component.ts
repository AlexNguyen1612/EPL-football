import { Component, OnInit } from '@angular/core';
import { Team } from '../team';

import { TeamService } from '../team.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent implements OnInit {
  
  selectedTeam: Team;

  teams:Team[];

  constructor(private teamService:TeamService) {
    
  }

  ngOnInit() {
    console.log("inside ngOnInit");
    this.getTeams();
    console.log("ngOnInit-parent component");
  }

  onSelect(team: Team):void {
  	this.selectedTeam = team;
    console.log("onSelect parent component");
  }

  getTeams():void {
    this.teamService.getTeams().subscribe(teams=>this.teams = teams);
    console.log("getTeams-parent component");
  }

}
