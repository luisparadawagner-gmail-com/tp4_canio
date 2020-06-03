import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table' ;

@Component({
  selector: 'app-planilla',
  templateUrl: './planilla.component.html',
  styleUrls: ['./planilla.component.css']
})

export class PlanillaComponent implements OnInit{

  //shownColumns: string [] = [ 'title' , 'editorial' , 'author' , 'serialNumber' ];
  displayedColumns: string [] = [ 'title' , 'editorial' , 'author' , 'serialNumber' ];
  dataSource = new MatTableDataSource <LibraryBook> (ELEMENT_DATA);
  //dataSource = ELEMENT_DATA;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
   this.dataSource.paginator = this.paginator;
  }
}

export interface LibraryBook {
  title: string;
  editorial: string;
  author: string;
  serialNumber: number;
}

const ELEMENT_DATA: LibraryBook[] = [
  {title: 'House of Furies' , editorial: 'VRYA', author: 'Madeleine Roux', serialNumber: 9789877472875},
  {title: 'El Archivo', editorial: 'DESTINO', author: 'Victoria Schwab', serialNumber: 9789507323171},
];

