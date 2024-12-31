import { HeaderComponent } from '@codewithahsan/ng-cb-ui';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BucketComponent } from './bucket/bucket.component';
import { BucketService } from './bucket/bucket.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [HeaderComponent, RouterModule, CommonModule, BucketComponent]
})
export class AppComponent {
  store = inject(BucketService);
  bucketLength$ = this.store.bucketLength$;
}
