import { Component, OnInit } from '@angular/core';
import { TPost } from 'src/app/models/typePost';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postsList!: TPost[];
  constructor(
    private postService: PostService
  ) { 
    this.showPost()
  }

  ngOnInit(): void {
  }

  showPost() {
    console.log(this.postsList)
    this.postService.getPosts().subscribe((data: any) => {
      this.postsList= data
    })
  }

  handleRemove(id:any){
    const confirm = window.confirm('Bạn có chắc chắn muốn xóa!');
    if(confirm){
      this.postService.removePost(id).subscribe(()=>{
        this.postsList =  this.postsList.filter(item => item.id !== id)
      })
    }
  }
}
