import { Component } from '@angular/core';
import { BlogPost } from '../data/models/blog-post.model';
import { SVCBlogPostService } from '../data/services/svc-blog-post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {

  listOfPosts : BlogPost[] = [];

  constructor(
    private blogSVC: SVCBlogPostService
  ){}

  ngOnInit(){
this.listOfPosts= this.blogSVC.GetAllPosts();
  }
}
