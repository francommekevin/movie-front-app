import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(private _focusMonitor: FocusMonitor,
              private router: Router) {
    router.events.subscribe(() => {
      document.getElementById('myBar').style.width = '0%';
    });
  }

  ngOnInit(): void {
    this.basicScrollTop();
    this.basicProgressBar();
  }

  basicScrollTop() {
    const btnTop = document.querySelector('#goTop');
    const btnReveal = () => {
      if (window.scrollY >= 500) {
        btnTop.classList.add('is-visible');
      } else {
        btnTop.classList.remove('is-visible');
      }
    };
    const TopscrollTo = () => {
      if (window.scrollY !== 0) {
        setTimeout(function() {
          window.scrollTo(0, window.scrollY - 100);
          TopscrollTo();
        }, 3);
      }
    };
    window.addEventListener('scroll', btnReveal);
    btnTop.addEventListener('click', TopscrollTo);
  }

  basicProgressBar() {
    window.onscroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      document.getElementById('myBar').style.width = scrolled + '%';
    };
  }

  ngAfterViewInit() {
    this._focusMonitor.stopMonitoring(document.getElementById('stop-cdk-nav'));
  }
}
