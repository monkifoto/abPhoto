export class BlogPost {

  postID:string;
  postTitle: string;
  postContent: string;

  constructor(postID:string, postTitle:string, postContent:string){
    this.postID = postID;
    this.postTitle = postTitle;
    this.postContent = postContent;
  }

  toString(): string{
    return '${this.postID} ${this.postTitle} ${this.postContent}';
  }

}
