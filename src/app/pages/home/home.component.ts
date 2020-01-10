import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { CategoryService } from '../../services/category.service';
import { AuthServiceService } from '../../services/auth-service.service';
import { Post } from '../../models/post.models';
import { Category } from '../../models/category.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private posts: Array<Post>;
  private categories: Array<Category>;
  private logged: boolean;

  constructor(private postService: PostsService,
              private categoryService: CategoryService,
              private authService: AuthServiceService,
              private router: Router) { }

  ngOnInit() {
    this.postService.getPosts()
    .subscribe(posts => { this.posts = posts.results; });
    this.categoryService.getCategories()
    .subscribe(categories => { this.categories = categories.results; });
    this.logged = this.authService.loggedIn();
  }

  goToPostForm() {
    this.router.navigate(['post-form/0']);
  }
}
