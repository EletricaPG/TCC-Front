import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup;
  erroDados!:boolean;
   usuario:any;
   returnUrl!: string;
  activatedRouter: any;
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      name:['',Validators.required],
      password:['',Validators.required]
    });
  }

  entrar(){
    this.http.get<any>(`${environment.apibaseURL}api/Client`)
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        localStorage.setItem("idClient",a.id);
        localStorage.setItem("name",a.name);
        return a.name ===  this.loginForm.value.name && a.password ===  this.loginForm.value.password
      });
      if(user){
        this.erroDados = false;
        this.loginForm.reset();
        this.router.navigate(['home']);
      }else{
        this.erroDados = true;
       
      }
    })
  }

  // entrar() {
   
  //   this.usuarioService.verificarUsuario(this.usuario)
  //     .subscribe(
  //       usuario_json => {
  //         // essa linha será executada no caso de retorno sem erros                          
  //         this.usuarioService.usuario = usuario_json;

  //         if (this.returnUrl == null) {
  //           this.router.navigate(['/']);
  //         } else {
  //           this.router.navigate([this.returnUrl]);
  //         }
  //       },
  //       err => {
  //         console.log(err.error);
         
  //       }
  //     );          
  // }

}
