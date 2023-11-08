import { Injectable } from '@angular/core';
import { BlogPost } from '../models/blog-post.model';
import { Firestore } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SVCBlogPostService {

  // listOfPosts: BlogPost[] = [
  //   // new BlogPost('1','First Post','This is the very first Post' ),
  //   // new BlogPost('2','Second Post','This is the very Second Post' ),
  //   // new BlogPost('3','Third Post','This is the very Third Post' ),
  //   // new BlogPost('4','Fourth Post','This is the very Fourth Post' ),
  //   // new BlogPost('5','Fifth Post','This is the very Fifth Post' )
  // ]

  listOfPosts: BlogPost[] = [];

   constructor(private afs: AngularFirestore) { }

   ngOnInit() {

  }

  GetPosts(){
    this.afs
    .collection('blog')
    .get()
    .subscribe((snapshot) => {
      const blogs = snapshot.docs.map((doc:any) => {
        return {
          postID: doc.data().ID,
          postTitle: doc.data().Title,
          postContent: doc.data().Content,
          Date: doc.data().Date,
          Creator: doc.data().Creator
        };
      });
      console.log(blogs);
    });
    return this.listOfPosts;
  }


  GetAllPosts(): BlogPost[] {


      return this.listOfPosts;
  }


}
