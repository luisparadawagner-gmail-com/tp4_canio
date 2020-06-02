import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
  }

    nombreControl = new FormControl('Book');

   
    libroForm = this.fb.group({
        titulo : ['', Validators.required],
        editorial : [''],
        autori : [''],
        codigo : ['', Validators.required]
    });

    submit(){
      debugger;
      this.libroForm.value;
    }

}
