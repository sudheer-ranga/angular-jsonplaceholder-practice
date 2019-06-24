import { Component, Input } from '@angular/core';
// import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent {
  @Input() posts: any;
}
