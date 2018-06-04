import { Component, OnInit, Input } from '@angular/core';
import { Teams } from '../teams';
import { PersonalService } from '../personal.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() selectedFixture: Teams;
  @Input() selectedTeam: Teams[];
  
  constructor(
  	private route: ActivatedRoute,
  	private personalService: PersonalService
  ) { }

  ngOnInit() {
 
  }


}
