import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedLeagueTableComponent } from './detailed-league-table.component';

describe('DetailedLeagueTableComponent', () => {
  let component: DetailedLeagueTableComponent;
  let fixture: ComponentFixture<DetailedLeagueTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedLeagueTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedLeagueTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
