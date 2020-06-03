import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {


  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute){}

  
  ngOnInit(): void {
    
  }
  
  nombreControl = new FormControl('Book');

  //listarLibro: any[]
     
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
