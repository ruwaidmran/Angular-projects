import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-sec-left',
  templateUrl: './sec-left.component.html',
  styleUrls: ['./sec-left.component.css']
})
export class SecLeftComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {
    
  }
  sectionLeftTitle= 'left head';
  sectionLeftDescription= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularity in the 1960s with the release of Lestrade sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Lades PageMaker including versions of Lorem Ipsum.";
  
  }
  