import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.scss',
})
export class Project {
	@Input() title: string = '';
	@Input() description: string = ''
	@Input() link1: string = ''
}
