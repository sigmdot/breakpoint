import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchmakingcardComponent } from './matchmakingcard.component';

describe('MatchmakingcardComponent', () => {
  let component: MatchmakingcardComponent;
  let fixture: ComponentFixture<MatchmakingcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchmakingcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchmakingcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
