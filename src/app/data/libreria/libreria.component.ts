import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { LibraryBook } from './../clases/Libro';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css']
})
export class LibreriaComponent implements OnInit {

  
  constructor(private fb: FormBuilder){}

  @Input() libreria : LibraryBook; 

  libroForm : FormGroup;

  ngOnInit(): void {
    debugger;
    //let libroPrueba = this.libreria;
    this.initForm (this.libreria);
  }
    
  nombreControl = new FormControl('Book');

   initForm (libreria : LibraryBook){
     debugger;
    this.libroForm = this.fb.group({
        titulo : [libreria.titulo, Validators.required],
        editorial : [libreria.editorial],
        autor : [libreria.autor],
        codigo : [libreria.codigo, Validators.required]
    });

  }

    submit(){
      debugger;
      this.libroForm.value;
    }

}
