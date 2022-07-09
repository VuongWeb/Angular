import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TCate } from 'src/app/models/typeCate';
import { TPost } from 'src/app/models/typePost';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {
  d = Date();
  createAt = this.d.toString();
  post: TPost = {
    title: "",
    image: "",
    createAt: this.createAt,
    categoryPostId: 0,
    shortDesc: "",
    desc: ""
  }

  cates!: any;

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.postService.getPost(id).subscribe(data => {
        this.post = data
      })
    }

    this.showCate()

  }

  showCate() {
    this.postService.getCategoriesPosts().subscribe((data: any) => {
      this.cates = data
      console.log(this.cates);

    })
  }

  onSubmit() {
    const id = + this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.postService.updatePost(this.post).subscribe(data => {
        console.log(data);

        // setTimeout(() => {
        //   this.router.navigateByUrl('/admin/postsList');
        // }, 2000)
      })
    }

    console.log(this.createAt)
    console.log(this.post)
    this.postService.addPost(this.post).subscribe(data => {
      console.log(data);
      //  setTimeout(() => {
      //    this.router.navigateByUrl('/admin/postsList');
      //  }, 2000)
    })
  }

}
