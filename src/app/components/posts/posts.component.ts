import { Component } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent {
  constructor(private apiService: APIService) {}
  posts = [];
  isLoading = false;

  loadPosts() {
    this.isLoading = true;
    
    this.apiService.getPosts().subscribe(data => {
      this.isLoading = false;
      this.posts = data;
    });
  }

  ngOnInit () {
    this.loadPosts();
  }
}
