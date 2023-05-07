import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-section-third',
  templateUrl: './section-third.component.html',
  styleUrls: ['./section-third.component.css']
})
export class SectionThirdComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
  sectionTitle: string = "Interpolation"
  myName: string = "Ruwaid Imran";
  fullName: string = "Muhammad"
  myMethod() {
    return "my Name is " + this.fullName + this.myName;
  }

  appStatus: boolean = true;
  status1: string = "Online";
  status2: string = "Offline";

}
