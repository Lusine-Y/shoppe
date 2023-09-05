import { Component } from '@angular/core';
import { MainService } from '../services/main.service';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {


	trends = this.mainService.trends;

	constructor(public mainService: MainService) {
}

}
