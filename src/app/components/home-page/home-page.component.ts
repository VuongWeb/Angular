import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TPost } from 'src/app/models/typePost';
import { PostService } from 'src/app/services/post.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  blogs!: any
  projects!: any
  constructor(
    private postService: PostService,
    private projectService: ProjectService,
  ) {
    this.showPost();
  }

  ngOnInit(): void {
  }

  showPost() {
    this.postService.getPostLimit().subscribe(data => {
      this.blogs = data
      console.log(this.blogs);
    })

    this.projectService.getProjectsLimit().subscribe(data => {
      this.projects = data
      console.log(this.projects);
    })
  }

}
