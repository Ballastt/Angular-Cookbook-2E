import { HeaderComponent } from '@codewithahsan/ng-cb-ui';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FbCardComponent } from './components/fb-card/fb-card.component';
import { TwitterCardComponent } from './components/twitter-card/twitter-card.component';
import { SocialCardType } from './types/social-card-type';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [
        HeaderComponent,
        CommonModule,
        FbCardComponent,
        TwitterCardComponent,
    ]
})
export class AppComponent {
  selectedCardType: SocialCardType = 'facebook';

  setCardType(type: SocialCardType) {
    this.selectedCardType = type;
  }
}
