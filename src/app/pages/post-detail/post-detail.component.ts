import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../models/post.models';
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  private post: Post;

  constructor(private activatedRoute: ActivatedRoute, private postService: PostsService) { }


  get_data(id: number): void {
    this.postService.getPost(id).subscribe(post => {this.post = post;
                                                    console.log(this.post); });

  }

  toArray(steps: object) {
    return Object.keys(steps).map(key => steps[key]);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      param => this.get_data(param.id)
    );
  }

}
