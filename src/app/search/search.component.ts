import { Component, OnInit } from '@angular/core';
import { Home } from '../models/home';
import { homeList } from '../models/allHomes';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  homes = homeList;

  newHomeSearch = null;

  filterBySale: string = "allHomes";

  makeNewHome() {
    this.newHomeSearch = true;
  }

  onChange(optionFromMenu) {
  this.filterBySale = optionFromMenu;
  }

  toggleSale(clickedHome: Home, setSale: boolean) {
   clickedHome.sale = setSale;
  }

  constructor() { }

  ngOnInit() {
  }

}
