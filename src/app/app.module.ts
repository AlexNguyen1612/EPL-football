import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { TeamService } from './team.service';
import { PlayerService } from './player.service';

import { PersonalService } from './personal.service';
import { TeamDataService } from './team-data.service';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

import { DetailedLeagueTableComponent } from './detailed-league-table/detailed-league-table.component';


import { TestComponent } from './test/test.component';
import { DetailComponent } from './detail/detail.component';

import { NewsComponent } from './news/news.component';
import { NewsContentComponent } from './news-content/news-content.component';

import {RouterModule,Routes} from '@angular/router';
import { AppRoutingModule } from './/app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent, 
    DetailedLeagueTableComponent,
    TestComponent,
    DetailComponent,
    NewsComponent,
    NewsContentComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [TeamService, PlayerService,TeamDataService,PersonalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
