import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdListDetailComponent } from './prod-list-detail.component';

describe('ProdListDetailComponent', () => {
  let component: ProdListDetailComponent;
  let fixture: ComponentFixture<ProdListDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdListDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
