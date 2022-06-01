import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerLocalComponent } from './server-local.component';

describe('ServerLocalComponent', () => {
  let component: ServerLocalComponent;
  let fixture: ComponentFixture<ServerLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerLocalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
