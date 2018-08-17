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

  makeNewKeg() {
    this.newHomeSearch = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
