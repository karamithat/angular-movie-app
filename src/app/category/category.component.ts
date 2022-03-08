import { CategoryRepository } from './../models/categoty.repository';
import { Category } from './../models/category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {



  categories : Category[];
  categoryReository: CategoryRepository;
  constructor() {
    this.categoryReository = new CategoryRepository();
    this.categories = this.categoryReository.getCategories();
   }

  ngOnInit(): void {
  }

}
