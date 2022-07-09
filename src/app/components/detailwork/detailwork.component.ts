import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TProject } from 'src/app/models/typeProject';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-detailwork',
  templateUrl: './detailwork.component.html',
  styleUrls: ['./detailwork.component.css']
})
export class DetailworkComponent implements OnInit {
  work!: TProject
  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) {
    const id = this.route.snapshot.paramMap.get('id')
    this.projectService.getProject(id).subscribe(data => {
      this.work = data
    })
  }

  ngOnInit(): void {
  }

}
