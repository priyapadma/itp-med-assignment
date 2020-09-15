import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  mobileMenu: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  /**********************************Method to Toggle Mobile & Tab Menu***************************************/
  showMobileNav(){
    this.mobileMenu = !this.mobileMenu; 
  }

}
