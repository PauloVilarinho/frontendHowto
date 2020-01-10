import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category.models';
import { Post } from '../../models/post.models';
import { CategoryService } from '../../services/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {
  category: Category;
  categories: Array<Category>;
  posts: Array<Post>;

  constructor(private activatedRoute: ActivatedRoute,
              private categoryService: CategoryService, ) {
              }

  get_data(id: number): void {
    this.categoryService.getCategory(id)
    .subscribe(category => {this.category = {
                                  id : category.id,
                                  title: category.title,
                                  description: category.description
                                };
                            this.posts = category.posts;
    });
    this.categoryService.getCategories()
    .subscribe(categories =>  this.categories = categories.results );
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.get_data(params.id);
    });
  }

}
