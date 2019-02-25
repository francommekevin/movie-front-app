import { AfterViewInit, Component } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  constructor(private _focusMonitor: FocusMonitor) {
  }

  ngAfterViewInit() {
    this._focusMonitor.stopMonitoring(document.getElementById('stop-cdk-nav'));
  }
}
