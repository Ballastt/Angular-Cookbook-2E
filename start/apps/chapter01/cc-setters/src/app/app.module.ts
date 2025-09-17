import { HeaderComponent } from '@codewithahsan/ng-cb-ui';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VersionControlComponent } from './components/version-control/version-control.component';
import { VcLogsComponent } from './components/vc-logs/vc-logs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [AppComponent, VersionControlComponent],
  imports: [
    HeaderComponent,
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    ReactiveFormsModule,
    VcLogsComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
