import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {


  records: Array<any>;
  isDesc: boolean = false;
  column: string = 'CategoryName';
  direction: number;
  constructor() { }

  ngOnInit() {
    this.records= [
      { CategoryID: 1,  CategoryName: "Beverages", Description: new Date(2018, 0, 10) },
      { CategoryID: 2,  CategoryName: "Condiments", Description: new Date(2018, 1, 10) },
      { CategoryID: 3,  CategoryName: "Confections", Description: new Date(2018, 1, 11) },
      { CategoryID: 4,  CategoryName: "Cheeses",  Description: new Date(2018, 3, 10) },
      { CategoryID: 5,  CategoryName: "Grains/Cereals", Description: new Date(2018, 4, 10) },
      { CategoryID: 6,  CategoryName: "Beverages", Description: new Date(2018, 5, 10)},
      { CategoryID: 7,  CategoryName: "Condiments", Description: new Date(2018, 6, 10)},
      { CategoryID: 8,  CategoryName: "Confections", Description: new Date(2018, 7, 10)},
      { CategoryID: 9,  CategoryName: "Cheeses",  Description: new Date(2018, 8, 10)},
      { CategoryID: 10, CategoryName: "Grains/Cereals", Description: new Date(2018, 9, 10) }
     ];

  }
  sort(property){
    this.direction = this.isDesc ? 1 : -1; 
    this.isDesc = !this.isDesc; 
    this.column = property;
  };
}