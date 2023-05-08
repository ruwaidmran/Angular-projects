import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-elemnts',
  templateUrl: './server-elemnts.component.html',
  styleUrls: ['./server-elemnts.component.css']
})
export class ServerElemntsComponent implements OnInit{
  @Input()
  element!: {
    type: string;
    name: string; content: string;
  };
constructor(){}
ngOnInit(){}
}
