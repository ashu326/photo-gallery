import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy{

  posts: Post[] = [];
  private postSubs: Subscription;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.postSubs = this.postsService.getPost()
      .subscribe((postsRecived: Post[]) => {
        this.posts = postsRecived;
      });
  }

  ngOnDestroy() {
    this.postSubs.unsubscribe();
  }
}
