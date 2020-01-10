import { Component, OnInit, Input } from '@angular/core';
import {Category} from '../../models/category.models';
import { CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Array<Category> ;


  constructor( private categoryService: CategoryService, ) { }

  ngOnInit() {
    this.categoryService.getCategories()
    .subscribe(categories =>  this.categories = categories.results );
  }

}
