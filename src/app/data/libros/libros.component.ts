import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LibraryBook } from './../clases/Libro';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {


  constructor(private fb: FormBuilder){}

  libro : LibraryBook;

  showLibreria : boolean = false;
  showLibro : boolean = true;
  
  ngOnInit(): void {
    
  }
  
  nombreControl = new FormControl('Book');

     
    libroForm = this.fb.group({
        titulo : ['', Validators.required],
        editorial : [''],
        autor : [''],
        codigo : ['', Validators.required]
    });

    submit(){
      debugger;
      this.libroForm.value;
      this.libro = this.libroForm.value;

      this.showLibreria = true;
      this.showLibro = false;
      
    }


    
}
