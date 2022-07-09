import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TProject } from 'src/app/models/typeProject';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  workList!: TProject[];
  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) {
    this.showProject()
  }

  ngOnInit(): void {
  }

  showProject() {
    this.projectService.getProjects().subscribe(data => {
      this.workList = data
    })
  }

  handleRemove(id: any) {
    const confirm = window.confirm('bạn có chắc chắn xóa không !');
    if (confirm) {
      this.projectService.removeProject(id).subscribe(data => {
        this.workList = this.workList.filter(item => item.id !== id)
      })
    }
  }

}
