import { Component, OnInit, Input } from '@angular/core';
import { TPost } from 'src/app/models/typePost';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  listPost!: TPost[];

  constructor(
    private postService: PostService
  ) {
    this.ListPost();
  }

  ngOnInit(): void {
  }

  ListPost() {
    this.postService.getPosts().subscribe(data => {
      this.listPost = data;
    })
  }

}
