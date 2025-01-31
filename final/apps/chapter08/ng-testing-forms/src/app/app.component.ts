import { HeaderComponent } from '@codewithahsan/ng-cb-ui';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VersionControlRfAsyncComponent } from './components/version-control-rf-async/version-control-rf-async.component';
import { VersionControlRfComponent } from './components/version-control-rf/version-control-rf.component';
import { VersionControlTdfComponent } from './components/version-control-tdf/version-control-tdf.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [
        HeaderComponent,
        CommonModule,
        RouterModule,
        VersionControlTdfComponent,
        VersionControlRfComponent,
        VersionControlRfAsyncComponent,
    ]
})
export class AppComponent {}
