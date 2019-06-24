import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})

export class PaginationComponent {
  @Input() totalPages;
  @Input() currentPage: any;
  @Output() paginate = new EventEmitter();

  onPageChange(page) {
    this.paginate.emit(page);
  }

  ngOnInit () {
  }
}
