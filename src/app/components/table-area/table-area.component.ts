import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item.model';

@Component({
  selector: 'app-table-area',
  templateUrl: './table-area.component.html',
  styleUrls: ['./table-area.component.scss']
})
export class TableAreaComponent implements OnInit {

  @Input() items: Item[];

  constructor() { }

  ngOnInit(): void {
  }

}
