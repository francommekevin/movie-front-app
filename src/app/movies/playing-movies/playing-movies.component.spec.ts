import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayingMoviesComponent } from './playing-movies.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule, MatPaginatorModule, MatProgressSpinnerModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from '../../services/movies.service';

describe('PlayingMoviesComponent', () => {
  let component: PlayingMoviesComponent;
  let fixture: ComponentFixture<PlayingMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatCardModule,
        HttpClientModule,
        MatPaginatorModule,
        MatProgressSpinnerModule
      ],
      declarations: [ PlayingMoviesComponent ],
      providers: [MoviesService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayingMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
