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
    id: "",
    title: "",
    body:""
  }

  constructor(private _postService: PostService) {}

  ngOnInit(): void {
    this._postService
      .getPosts()
      .subscribe((posts) => (this.posts = posts.slice(0,5)));
  }
}
