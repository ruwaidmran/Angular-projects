import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-section-third',
  templateUrl: './section-third.component.html',
  styleUrls: ['./section-third.component.css']
})
export class SectionThirdComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
  // sectionTitle: string = "Interpolation"
  fullName: string = "Test"
  myName: string = "testing";

  myMethod() {
    return "here is my " + this.fullName + this.myName;
  }

  appStatus: boolean = true;
  status1: string = "Online";
  status2: string = "Offline";

}
