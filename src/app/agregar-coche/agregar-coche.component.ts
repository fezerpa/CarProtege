import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-agregar-coche',
  templateUrl: './agregar-coche.component.html',
  styleUrl: './agregar-coche.component.css'
})
export class AgregarCocheComponent implements OnInit {
  public formularioCoche: FormGroup;

  matricula:string;

  constructor(private formBuilder: FormBuilder) {
   this.matricula="";
   }

  ngOnInit(): void {
    
    this.formularioCoche = this.formBuilder.group({
  
      matricula: ['', [Validators.required]],
      modelo: ['', [Validators.required]],
      color: ['', [Validators.required]],
      anioCoche: ['', [Validators.required]],
      fechaITV:   ['', [Validators.required]]


  });
  }

  send(form: any) {
    console.log("Este es el valor del email ==== ", form.value.modelo);
    console.log("Entre en el send")
    
    alert(this.matricula);
  }
}

