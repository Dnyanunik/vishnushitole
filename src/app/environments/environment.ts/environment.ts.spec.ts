import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentTs } from './environment.ts';

describe('EnvironmentTs', () => {
  let component: EnvironmentTs;
  let fixture: ComponentFixture<EnvironmentTs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnvironmentTs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvironmentTs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
