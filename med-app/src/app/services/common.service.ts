import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  currDate = new Date();
  
  constructor() { }

  /***************************************Method to Get Current Year********************************************************** */
  getCurrentYear(){
    return this.currDate.getFullYear()
  }
}
