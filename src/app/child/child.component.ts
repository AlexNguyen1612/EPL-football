import { Component, OnInit, Input } from '@angular/core'; 
import {Team} from '../team';

import { Player } from '../player';

import { Fixture } from '../fixture';

import { League } from '../league';

import { PlayerService } from '../player.service';


import { TeamService } from '../team.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit {
	
  teams:Team[];

  standings:League[];

  players:Player[];

  fixtures:Fixture[];

  showDiv:boolean = false;

  count:number = 0;

  str:string = "";

  @Input() team: Team;

  constructor(private playerService: PlayerService, private teamService:TeamService) {

  }

  ngOnInit() {
  	console.log("inside ngOnInitchild component");
    this.getTeams();
    this.getLeague();
  }

  onSelectPlayers(link1: string, link2: string): void {
  	console.log("count = ", this.count);
  	this.count = this.count+1;
  	console.log("showDiv", this.showDiv);
  	if (this.count%10==1) {
  		this.playerService.getLink(link1, link2);
  		this.getPlayers();
  		this.getFixtures();
  	}
  	if (this.showDiv==true) {

  		return;
  	}
  	this.showDiv=true;
  	console.log("showDiv", this.showDiv);
  }

  substr(str: string): string {
    this.str = str.substring(str.length -3);
    return this.str;
  }

  getLeague():void {
    this.teamService.getLeague().subscribe(standings=>this.standings = standings);
    console.log("getLeague-child component");
  }

  getTeams():void {
    this.teamService.getTeams().subscribe(teams=>this.teams = teams);
    console.log("getTeams-child component");
  }

  getPlayers():void {
    console.log("1st getPlayers-child component");
    this.playerService.getPlayers().subscribe(players=>this.players = players);
    console.log("2nd getPlayers-child component");
  }

  getFixtures():void {
    console.log("1st getFixtures-child component");
    this.playerService.getFixtures().subscribe(fixtures=>this.fixtures = fixtures);
    console.log("2nd getFixtures-child component");
  }

}
