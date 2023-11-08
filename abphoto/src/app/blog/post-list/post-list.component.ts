import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../data/models/blog-post.model';
import { SVCBlogPostService } from '../data/services/svc-blog-post.service';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {

  listOfPosts?: BlogPost[];

  constructor(
    private blogSVC: SVCBlogPostService
  ){}

  ngOnInit(){
   this.retrieveBlogPosts();
  }
  retrieveBlogPosts(): void{
    this.blogSVC.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id,
            ...c.payload.doc.data()})
        )
      )
    ).subscribe(data=>{
      this.listOfPosts = data;
      console.log(data);
    });

  this.listOfPosts?.forEach(p => (console.log(p.toString()+ '----------Test')));
  }

}
