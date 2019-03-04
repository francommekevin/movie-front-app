import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedMoviesComponent } from './top-rated-movies.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule, MatPaginatorModule, MatProgressSpinnerModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from '../../services/movies.service';

describe('TopRatedMoviesComponent', () => {
  let component: TopRatedMoviesComponent;
  let fixture: ComponentFixture<TopRatedMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatCardModule,
        HttpClientModule,
        MatPaginatorModule,
        MatProgressSpinnerModule
      ],
      declarations: [ TopRatedMoviesComponent ],
      providers: [MoviesService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRatedMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
