import { Component, OnInit } from '@angular/core';
import { masterJson } from '../utils/json/home-details';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.css']
})
export class HomeDetailsComponent implements OnInit {

  tabs: string[] = masterJson.pages[0].tabs;
  uiData: any[] = masterJson.pages[0].pages;
  constructor() { }

  ngOnInit() {
  }

  /**
   * @description To fetch available home types
   */
  populate_home_types = () => {
    console.log("working-yes");
  }

  /**
   * @description it redirects page to "Home construction" page
   */
  home_construction_func = () => {
    throw new Error('Functionality not implemented');
  }

  /**
   * @description This function is called whenever back button is pressed on component
   */
  back_func = () => {
    throw new Error('Functionality not implemented');
  }

  /**
   * @description this function executes function available within the context
   * @param func function name
   */
  executeFunction(func: string) {
    eval("this." + func);
  }
}
