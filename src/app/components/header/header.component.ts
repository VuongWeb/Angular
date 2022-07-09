import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() data!: string;
  status!: true
  menu = document.querySelector('.menu');
  navbar = document.querySelector('.navbar')
  constructor() {

  }

  ngOnInit(): void {
  }

  handelClick() {
    console.log('abc');
  }



}
