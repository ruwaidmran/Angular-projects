import {Component} from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
selector : 'app-server',
templateUrl: './server.component.html',
styleUrls: ['./server.component.css'],
})
export class ServerComponent{
    title= "start server Component"
    name="John"
    serverId : number = 20;
    serverStatus: string = 'components status';
    
    getServerStatus(){
        return this.serverStatus;
    }
  
}