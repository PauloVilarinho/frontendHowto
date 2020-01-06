import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/models/post.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private posts: Array<Post>;

  constructor(private postService: PostsService) { }

  ngOnInit() {

    this.postService.getPosts()
    .subscribe(posts => { this.posts = posts; });
  }

}
