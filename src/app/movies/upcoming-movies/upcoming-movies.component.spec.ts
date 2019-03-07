import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingMoviesComponent } from './upcoming-movies.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule, MatPaginatorModule, MatProgressSpinnerModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from '../../services/movies.service';

describe('UpcomingMoviesComponent', () => {
  let component: UpcomingMoviesComponent;
  let fixture: ComponentFixture<UpcomingMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatCardModule,
        HttpClientModule,
        MatPaginatorModule,
        MatProgressSpinnerModule
      ],
      declarations: [ UpcomingMoviesComponent ],
      providers: [MoviesService],    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
