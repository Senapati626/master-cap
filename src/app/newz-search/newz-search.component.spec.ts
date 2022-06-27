import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewzSearchComponent } from './newz-search.component';

describe('NewzSearchComponent', () => {
  let component: NewzSearchComponent;
  let fixture: ComponentFixture<NewzSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewzSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewzSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
