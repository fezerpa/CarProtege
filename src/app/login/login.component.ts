import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule, NgForm } from '@angular/forms';
import { Console } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // <- Cambiado a "styleUrls"
})
export class LoginComponent implements OnInit {
  public formLogin: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {


    console.log("Entre");
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]

    });
    console.log("Este es el resultado de this.login ===========", this.formLogin.invalid)
    console.log("Sali");
  }

  send(form: any) {
    console.log("Este es el valor del email ==== ", form.value.email);
    console.log("Este es el valor del password ==== ", form.value.password);
    console.log("Entre en el send")
    alert("Usuario Nuevo");
  }
}