export class BlogPost {

  postID:string;
  postTitle: string;
  postContent: string;
  postCreator: string;
  postDate: string;

  constructor(postID:string, postTitle:string, postContent:string,postCreator:string, postDate:string){
    this.postID = postID;
    this.postTitle = postTitle;
    this.postContent = postContent;
    this.postCreator = postCreator;
    this.postDate = postDate;
  }

  toString(): string{
    return '${this.postID} ${this.postTitle} ${this.postContent}';
  }

}
