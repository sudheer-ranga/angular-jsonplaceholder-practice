import { Component } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePageComponent {
  constructor (private apiService: APIService) {}
  
  posts = [];
  isLoading = false;
  postsPerPage: any = 10;
  totalPages = [];
  
  currentPosts = [];  
  currentPage: any = 1;
  currentPostIndex = 0;

  loadPosts() {
    this.isLoading = true;
    
    this.apiService.getPosts().subscribe(data => {
      this.isLoading = false;
      this.posts = data;

      this.getPaginationOptions();
    });
  }

  getPaginationOptions () {
    const pages = Math.ceil(this.posts.length / this.postsPerPage);

    for (let index = 1; index <= pages; index++) {
      this.totalPages.push(index);
    }

    this.paginate(this.currentPage);
  };

  onPaginate (page) {
    this.paginate(page);
  }

  paginate (page) {
    this.currentPage = page;
    const startIndex = (this.currentPage * this.postsPerPage) - this.postsPerPage;
    const endIndex = startIndex + this.postsPerPage;
    
    this.currentPostIndex = endIndex;
    this.currentPosts = this.posts.slice(startIndex, endIndex);
  }

  ngOnInit () {
    this.loadPosts();
  }
}
