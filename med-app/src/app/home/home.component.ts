import { Component, OnInit } from '@angular/core';
import { faqBlock, ourBlogBlock, openingHoursBlock, allBlock, medServiceBlock, featuresBlock, ourDoctorsBlock, statBlock, testimonialBlock } from '../data/home-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  openingHoursData: any = openingHoursBlock;
  bannerBlockDataArr : any = allBlock.results[0];
  aboutBlockDataArr : any = allBlock.results[1];
  timeTblBlockDataArr : any = allBlock.results[2];
  faqBlockDataArr : any = allBlock.results[3];
  serviceBlockDataArr : any = allBlock.results[4];
  featuresBlockDataArr : any = allBlock.results[5];
  teamBlockDataArr : any = allBlock.results[6];
  testimonialBlockDataArr : any = allBlock.results[7];
  specialBlockDataArr : any = allBlock.results[8];
  blogBlockDataArr : any = allBlock.results[9];
  contactBlockDataArr : any = allBlock.results[10];
  medServiceData : any = medServiceBlock;
  featuresData : any = featuresBlock;
  ourDoctorsDataArr : any = ourDoctorsBlock.results;
  statsDataArr : any = statBlock.results;
  testimonialDataArr : any = testimonialBlock.results;
  ourBlogDataArr : any = ourBlogBlock.results;
  faqDataArr : any = faqBlock.results;

  constructor() { }

  ngOnInit() {
  }

  toggleAccordian(event, index) {
    var element = event.target;
    element.classList.toggle("active");   
    var panel = element.nextElementSibling;
    panel.classList.toggle("panel-active");
}

}
