import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table' ;
import { LibraryBook } from '../clases/Libro';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-planilla',
  templateUrl: './planilla.component.html',
  styleUrls: ['./planilla.component.css']
})

export class PlanillaComponent implements OnInit{
  
  @Output() equipoHijoEvento = new EventEmitter<string>();

  displayedColumns: string [] = [ 'title' , 'editorial' , 'author' , 'serialNumber', 'modificar'];
  dataSource = new MatTableDataSource <LibraryBook> (ELEMENT_DATA);

  //@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
   //this.dataSource.paginator = this.paginator
  }

  constructor(private router: Router, private route: ActivatedRoute) {}

  goToLibreria() {		
    this.router.navigate(["/libreria-component"]);
  }

}
const ELEMENT_DATA: LibraryBook[] = [
  {
    titulo: 'House of Furies',
    editorial: 'VRYA',
    autor: 'Madeleine Roux',
    codigo: 9789877472875
  },
  {
    titulo: 'El Archivo',
    editorial: 'DESTINO',
    autor: 'Victoria Schwab',
    codigo: 9789507323171
  },
  {
    titulo: 'Black Paradox',
    editorial: 'IVREA',
    autor: 'Junji Ito',
    codigo: 9788417777395
  }
];