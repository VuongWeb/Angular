import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TPost } from 'src/app/models/typePost';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.css']
})
export class PostdetailComponent implements OnInit {
  postDetail!: TPost

  constructor(
    private route: ActivatedRoute,
    private postServiec: PostService
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.postServiec.getPost(id).subscribe(data => {
      this.postDetail = data
    })
  }

  ngOnInit(): void {
  }

}
