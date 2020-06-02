import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css']
})
export class LibreriaComponent implements OnInit {

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
