import { Component, OnInit } from '@angular/core';
import { IPost } from '../interafaces';
import { PostService } from '../services';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})


export class BlogComponent implements OnInit {
  
  public posts: IPost[] = [];

  myForm = {
    id: 0,
    title: "titulo default",
    body:"body default"
  }

  constructor(private _postService: PostService) {}

  ngOnInit(): void {
    this._postService
      .getPosts()
      .subscribe((posts) => (this.posts = posts.slice(0,5)));
  }

  public saveForm():void{
    console.log(this.myForm);
    const clone = {...this.myForm}
    this.posts.push(clone)
  }
}
