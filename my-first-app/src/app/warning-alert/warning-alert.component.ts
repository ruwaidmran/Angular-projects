import {
  Component
}
from '@angular/core';
@Component({
    selector: 'app-warning-alert',
    template: '<p class="warning-red">This is warning, You are in danger</p>',
    styles: ['p.warning-red{padding:20px;color:red;background-color:#FFE4E1; border:solid 1px;}'],
  }
) export class WarningAlertComponent {}