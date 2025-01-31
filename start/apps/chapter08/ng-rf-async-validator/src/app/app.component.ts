import { HeaderComponent } from '@codewithahsan/ng-cb-ui';
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VersionControlComponent } from './components/version-control/version-control.component';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [
        HeaderComponent,
        CommonModule,
        RouterModule,
        VersionControlComponent,
    ]
})
export class AppComponent implements OnInit {
  http = inject(HttpClient);

  ngOnInit(): void {
    this.resetApi();
  }
  resetApi() {
    this.http.get('http://localhost:3333/api/version/reset').subscribe({
      next: () => {
        console.log('version has been reset');
      },
    });
  }
}
