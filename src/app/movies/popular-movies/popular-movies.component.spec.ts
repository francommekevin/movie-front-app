import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularMoviesComponent } from './popular-movies.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material';
import { MoviesService } from '../../services/movies.service';
import { HttpClientModule } from '@angular/common/http';

describe('PopularMoviesComponent', () => {
  let component: PopularMoviesComponent;
  let fixture: ComponentFixture<PopularMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatCardModule,
        HttpClientModule
      ],
      declarations: [ PopularMoviesComponent ],
      providers: [MoviesService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
