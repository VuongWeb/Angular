import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TProject } from 'src/app/models/typeProject';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-work-add',
  templateUrl: './work-add.component.html',
  styleUrls: ['./work-add.component.css']
})
export class WorkAddComponent implements OnInit {
  d = Date();
  createAt = this.d.toString();

  project: TProject = {
    name: "",
    image: "",
    createAt: this.createAt,
    categoryProjectId: 0,
    desc: "",
    shortDesc: "",
  }

  cates!: any
  constructor(
    private projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.projectService.getProject(id).subscribe(data => {
        this.project = data
      })
    }

    this.showCate();
  }

  showCate() {
    this.projectService.getCategoriesProjects().subscribe(data => {
      this.cates = data
      console.log(this.cates)
    })
  }


  onSubmit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.projectService.updateProject(this.project).subscribe(data => {
        //  setTimeout(() => {
        //    this.router.navigateByUrl('/admin/postsList');
        //  }, 2000)
      })
    }
    this.projectService.addProject(this.project).subscribe(data => {
      //  setTimeout(() => {
      //    this.router.navigateByUrl('/admin/postsList');
      //  }, 2000)
    })
  }
}
