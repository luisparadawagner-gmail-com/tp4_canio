import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource, MatTable } from '@angular/material/table' ;
import { LibraryBook } from '../clases/Libro';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-planilla',
  templateUrl: './planilla.component.html',
  styleUrls: ['./planilla.component.css']
})

export class PlanillaComponent implements OnInit{

  constructor(private router: Router) {}


  datos: LibraryBook[] = [
    { titulo: 'House of Furies', editorial: 'VYRA', autor:'Madeleine Roux', codigo:9789877472875 },
    { titulo: 'El Archivo', editorial: 'DESTINO', autor: 'Victoria Schwab', codigo: 9789507323171 },
    { titulo: 'Black Paradox',editorial: 'IVREA',autor: 'Junji Ito', codigo: 9788417777395}
  ];

  dataSource = this.datos;
  displayedColumns: string [] = [ 'titulo' , 'editorial' , 'autor' , 'codigo', 'modificar'];    

  
  goToLibreria(book) {		
    this.router.navigate(["/libreria-component", book]);

  }

  ngOnInit() {
   
  }
}