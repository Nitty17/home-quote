import { Component, OnInit } from '@angular/core';
import { masterJson } from '../utils/home-protection';
@Component({
  selector: 'app-home-protection',
  templateUrl: './home-protection.component.html',
  styleUrls: ['./home-protection.component.css']
})
export class HomeProtectionComponent implements OnInit {
  tabs: string[] = masterJson.pages[0].tabs;
  uiData: any[] = masterJson.pages[0].pages;
  constructor() { }

  ngOnInit() {
  }

  populate_home_type = () => {
    console.log("working-yes");
  }


  back_func = () => {
    throw new Error('Functionality not implemented');
  }

  executeFunction(func: string) {
    eval("this." + func);
  }

}

