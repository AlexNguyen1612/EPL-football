import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';

import { DetailedLeagueTableComponent } from './detailed-league-table/detailed-league-table.component';
import { LeagueTableComponent } from './league-table/league-table.component';
import { ChildComponent } from './child/child.component';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { TestComponent } from './test/test.component';
import { NewsComponent } from './news/news.component';
import { NewsContentComponent } from './news-content/news-content.component';

const routes:Routes = [
{path: '',redirectTo: 'news',pathMatch: 'full' },
{ path: 'news', component: NewsComponent,data: {state: 1}},
{ path: 'newscontent/:id', component: NewsContentComponent,data: {state: 5} },
{ path: 'TeamInfo', component: ParentComponent,data: {state: 2} },
{path: 'Matches&Results',component: TestComponent,data: {state: 3}},
{path: 'Table', component:DetailedLeagueTableComponent,data: {state: 4}},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
