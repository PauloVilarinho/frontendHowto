import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { CategoryService } from '../../services/category.service';
import { Post } from '../../models/post.models';
import { Part } from '../../models/part.models';
import { Step } from '../../models/step.models';
import { Category } from '../../models/category.models';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  post: Post;
  formHeader: string;
  buttonName: string;
  categories: Array<Category>;
  categoryId: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              private postService: PostsService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      const id = +param.id;
      this.getData(id); });
    this.categoryService.getCategories().subscribe(categories => {this.categories = categories.results; });
  }

  getData(id: number): void {
    if (id === 0  ) {
      this.post = {
        id: 0,
        title: null,
        description: null,
        parts: []
      };
      this.formHeader = 'Create Post';
      this.buttonName = 'create';
    } else {
      this.postService.getPost(id).subscribe(post => this.post = post);
      this.formHeader = 'Edit Post';
      this.buttonName = 'update';
    }

  }

  addPart() {
    const part: Part = {
      id: null,
      title: null,
      steps: []
    };
    this.post.parts.push(part);
  }

  addStep(index: number) {
    const step: Step = {
      id : null,
      title : null,
      description: null,
    };
    this.post.parts[index].steps.push(step);
  }

  onSubmit(postform: NgForm) {
    if (this.post.id === 0) {
    this.postService.createPost(this.post, this.categoryId);
    this.router.navigate(['']);
    } else {
      this.postService.updatePost(this.post, this.categoryId);
    }

  }

}
