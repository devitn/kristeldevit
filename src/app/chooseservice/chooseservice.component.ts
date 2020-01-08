import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  

@Component({
  selector: 'app-chooseservice',
  templateUrl: './chooseservice.component.html',
  styleUrls: ['./chooseservice.component.scss']
})
export class ChooseserviceComponent implements OnInit {

  gov : string;
  constructor( private route: ActivatedRoute) { 
    this.gov = this.route.snapshot.paramMap.get("gov");
    console.log(this.gov);
  }
  location = 'Create order';

  ngOnInit() {
  }

}
