import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  abc!: any
  projectOfCate!:any
  cate!:any

  constructor(
    private postService:PostService,
    private route:ActivatedRoute
  ) { 
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.postService.getCategoriesOfPosts(id).subscribe(data=>{
      this.abc = data
      this.projectOfCate = this.abc.posts
      this.cate= this.abc.name
      console.log(this.projectOfCate);
    })
   

  }
}
