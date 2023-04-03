import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowPostComponent } from './row-post.component';

describe('RowPostComponent', () => {
  let component: RowPostComponent;
  let fixture: ComponentFixture<RowPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
