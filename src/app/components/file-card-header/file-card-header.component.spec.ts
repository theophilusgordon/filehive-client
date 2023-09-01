import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileCardHeaderComponent } from './file-card-header.component';

describe('FileCardHeaderComponent', () => {
  let component: FileCardHeaderComponent;
  let fixture: ComponentFixture<FileCardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileCardHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
