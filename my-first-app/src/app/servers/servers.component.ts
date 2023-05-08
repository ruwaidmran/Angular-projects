import {  Component,  OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-servers',
  // templateUrl: './servers.component.html', 
  // template: '<app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  title = "Servers"
  allowNewServer = false;
  serverCreationStatus = 'server not created';
  serverName = 'server Name value';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit() {}
  onCreateServer() {
    this.serverCreationStatus = 'server is created';
  }
  ///////////// passing and using data with event binding
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}