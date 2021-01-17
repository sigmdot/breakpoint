import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCog, faHome, faPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FireauthService } from 'src/app/core/services/fireauth/fireauth.service';

@Component({
  selector: 'usuario-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  faHome = faHome;
  faPlus = faPlus;
  faCog = faCog;
  faSignOutAlt = faSignOutAlt;
  constructor(private authSvc: FireauthService,private router: Router) {}

  ngOnInit(): void {
  }

  logOut(){
    this.authSvc.logOut().then(()=>
      this.router.navigateByUrl('/login')
    );
  }

}
