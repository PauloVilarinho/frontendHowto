import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { AuthServiceService} from '../../services/auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../models/post.models';
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  private postId: number;
  private post: Post;
  private isOwner: boolean;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private postService: PostsService,
              private authService: AuthServiceService) { }


  get_data(id: number): void {
    this.postId = id;
    this.postService.getPost(id).subscribe(post => {this.post = post;
                                                    console.log(this.post);
                                                    this.isOwner = this.authService.getCurrentUser() === post.owner_name;
                                                  });
  }

  deletePost(): void {
    if (confirm('Tem certeza que quer deletar esse post?')) {
      this.postService.deletePost(this.post.id).subscribe(request => this.router.navigate(['']));
    }
  }

  goToUpdatePost(): void {
    this.router.navigate([`post-form/${this.postId}`]);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      param => this.get_data(param.id)
    );
  }

}
