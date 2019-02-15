import { Component } from '@angular/core';

@Component({
    selector    : 'ap-menu',
    templateUrl : './menu.view.html',
    styleUrls   : ['./menu.css'] 
})
export class MenuController { 


      
    isShow = true;

    toggle() {
      // alert("chamei")
        this.isShow = !this.isShow;
    }

}

    

