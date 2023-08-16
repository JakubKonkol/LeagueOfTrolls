import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-mobile-nav-view',
  templateUrl: './mobile-nav-view.component.html',
  styleUrls: ['./mobile-nav-view.component.css']
})
export class MobileNavViewComponent {

  constructor(private router: Router) {
  }

  goto(url: string) {
    this.router.navigate([url]).then(r => console.log("Navigated to " + url));
  }
}
