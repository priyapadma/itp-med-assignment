import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear : number = 2020;

  constructor(private commonservice: CommonService) {
    this.currentYear = this.commonservice.getCurrentYear();
  }

  ngOnInit() {
  }

}
