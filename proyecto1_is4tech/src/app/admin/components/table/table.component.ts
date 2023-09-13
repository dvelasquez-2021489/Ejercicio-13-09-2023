import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  displayedColumns: string[] = ['id', 'nombre', 'edad'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

export interface Element {
  id: number;
  nombre: string;
  edad: number;
}

const ELEMENT_DATA: Element[] = [
  { id: 1, nombre: 'Juan', edad: 30 },
  { id: 2, nombre: 'Ana', edad: 25 },
  { id: 3, nombre: 'Pedro', edad: 40 },
  { id: 4, nombre: 'Maria', edad: 35 },
  { id: 5, nombre: 'Marcos', edad: 20 },
  { id: 6, nombre: 'Fabian', edad: 24 },
  { id: 7, nombre: 'Daniel', edad: 28 },
  { id: 8, nombre: 'Josue', edad: 31 },
  { id: 9, nombre: 'Alejandro', edad: 22 },
  { id: 10, nombre: 'Julian', edad: 18 },
  { id: 11, nombre: 'Mario', edad: 37 },
  { id: 12, nombre: 'Angel', edad: 15},
];

