import { Component, signal } from '@angular/core';
import { Project } from './project/project';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-page',
  imports: [Project, CommonModule],
  templateUrl: './project-page.html',
  styleUrl: './project-page.scss',
})
export class ProjectPage {
	
	showButton = true
	numberOfItems = 10;

	showProjects = true

	toggleShowProjects(){
		this.showProjects = (!this.showProjects)
	}

	projectList = [
		{
			id: '001',
			title: 'title-1',
			desc: 'The Lorem ipsum dolor sit amex, confectsThe Nuclear planttur adipisicing elit. Dicta aliquid, accusantium dolorem enim obcaecati quo. Quae accusamus culpa sunt magnam atque cumque ipsa vitae alias minima velit aperiam, rem eum excepturi quo sit minus?',
			link1: ' James'
		},
		{
			id: '002',
			title: 'title-2',
			desc: 'Lorem ipsum dolor sit ames consectetur adipisicing elit. Qui maiores numquam est quod!',
			link1: ""
		},
	]

}
