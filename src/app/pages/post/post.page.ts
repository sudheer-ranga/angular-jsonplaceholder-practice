import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss']
})
export class PostPageComponent {
  constructor (
    private route: ActivatedRoute,
    private apiService: APIService
  ) { }

  id = null;
  post = {};
  isLoading = false;
  loadPost () {
    this.isLoading = true;
    this.apiService.getPost(this.id).subscribe(data => {
      this.post = data;
      this.isLoading = false;
    });
  };

  ngOnInit () {
    this.route
      .params
      .subscribe(params => {
        this.id = params.id;
      });
    
      this.loadPost();
  }
}
