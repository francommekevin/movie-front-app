import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailComponent } from './movie-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material';
import { MoviesService } from '../../services/movies.service';
import { HttpClientModule } from '@angular/common/http';

describe('MovieDetailComponent', () => {
  let component: MovieDetailComponent;
  let fixture: ComponentFixture<MovieDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatCardModule,
        HttpClientModule,
      ],
      declarations: [ MovieDetailComponent ],
      providers: [MoviesService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
