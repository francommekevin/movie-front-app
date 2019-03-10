import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieHomeComponent } from './movie-home.component';
import { MoviesService } from '../../services/movies.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule, MatPaginatorModule, MatProgressSpinnerModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

describe('MovieHomeComponent', () => {
  let component: MovieHomeComponent;
  let fixture: ComponentFixture<MovieHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        MatProgressSpinnerModule
      ],
      declarations: [ MovieHomeComponent ],
      providers: [ MoviesService ],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
