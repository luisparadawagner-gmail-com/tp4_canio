import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css']
})
export class LibreriaComponent implements OnInit {

  

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute){}


  ngOnInit(): void {
  }
    
  nombreControl = new FormControl('Book');

   
    libroForm = this.fb.group({
        titulo : [, Validators.required],
        editorial : [''],
        autor : [''],
        codigo : ['', Validators.required]
    });

    submit(){
      debugger;
      this.libroForm.value;
    }

}
