import { Component, OnInit } from '@angular/core';
import { faCog, faHome, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'usuario-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  faHome = faHome;
  faCog = faCog;
  faSignOutAlt = faSignOutAlt;
  constructor() { }

  ngOnInit(): void {
  }

}
