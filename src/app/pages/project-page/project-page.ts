import { Component } from '@angular/core';
import { Project } from './project/project';

@Component({
  selector: 'app-project-page',
  imports: [Project],
  templateUrl: './project-page.html',
  styleUrl: './project-page.scss',
})
export class ProjectPage {

}
