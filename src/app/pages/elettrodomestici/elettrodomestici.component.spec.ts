import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElettrodomesticiComponent } from './elettrodomestici.component';

describe('ElettrodomesticiComponent', () => {
  let component: ElettrodomesticiComponent;
  let fixture: ComponentFixture<ElettrodomesticiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElettrodomesticiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElettrodomesticiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
