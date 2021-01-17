import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FireauthService } from 'src/app/core/services/fireauth/fireauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authSvc: FireauthService, private router: Router, private toastr: ToastrService) { }
  formLogin: FormGroup = new FormGroup({
    correo: new FormControl('', Validators.required),
    pass: new FormControl('', Validators.required)
  });
  ngOnInit(): void {}
  login() {
    const email = this.formLogin.value.correo;
    const pass = this.formLogin.value.pass;
    this.authSvc.loginEmailPass(email, pass).then((e) => {
      this.router.navigateByUrl('/matchmaking/home');
      console.log(e);
    }).catch(e => {
      if(e.code === 'auth/invalid-email'){
        this.toastr.warning('correo inválido','Error en los datos');
      }
      else{
        this.toastr.warning('Error en los datos','Datos erroneos');
        console.log(e);
      }
      this.formLogin.reset('');
    });
  }

}
