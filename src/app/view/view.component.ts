import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  @Input() title: String = '';
  @Input() description: String = '';

  constructor(private route: ActivatedRoute) {

   }

  ngOnInit(): void {
    const noteId: number = +this.route.snapshot.paramMap.get('id')!;
    this.title = 'Title Ipsum '+noteId;
    this.description = 'Lorem Ipsum '+noteId;
  }

}
