import { Component, OnInit } from '@angular/core';
import { TProject } from 'src/app/models/typeProject';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  listWork!: TProject[]
  constructor(
    private projectService: ProjectService
  ) {
    this.listWorks()
  }

  ngOnInit(): void {
  }

  listWorks() {
    this.projectService.getProjects().subscribe(data => {
      this.listWork = data
    })
  }

}
