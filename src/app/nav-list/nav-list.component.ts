import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.css']
})
export class NavListComponent implements OnInit {


  data = 'Personal-Portfolio-Angular';
    constructor() { }

  ngOnInit(): void {
  }

}
