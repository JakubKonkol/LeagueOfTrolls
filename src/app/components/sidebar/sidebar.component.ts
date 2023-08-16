import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {GlobalConfiguration} from "../../configuration/GlobalConfiguration";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  appVersion: string = GlobalConfiguration.APP_VERSION;
  constructor(private router: Router){

  }
  goto(url: string) {
    this.router.navigate([url]);
  }
}
