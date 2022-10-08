import { getLocaleEraNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
name: string = '';
search = [];

public currentSearch(){
  let newSearch = this.name;
  let currentSearch = this.search.push(newSearch);
  console.log("test", newSearch, currentSearch)
}


constructor() { }

ngOnInit(): void {
}

}
