import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Helper from '../../helpers/dataFilter';
import * as fromApp from '../../store/app.reducer';
import * as MonthActions from '../../store/month/month.actions';


@Component({
  selector: 'app-info-area',
  templateUrl: './info-area.component.html',
  styleUrls: ['./info-area.component.scss']
})
export class InfoAreaComponent implements OnInit {

  @Input() month: string; 
  
  constructor(
    private store: Store<fromApp.AppState>
  ) { }
  

  ngOnInit(): void {

  }

  formatCurrentMonth() {
    return Helper.formatCurrentMonth(this.month);
  }

  onLeftArrow() {
    let [year, month] = this.month.split('-');
    if (parseInt(month) > 1) {
      this.store.dispatch(
          new MonthActions.SetMonth(`${year}-${parseInt(month)-1}`)
      );
    } else {
      this.store.dispatch(
        new MonthActions.SetMonth(`${this.month}`)
      );
    }
  }

  onRightArrow() {
    let [year, month] = this.month.split('-');
    if (parseInt(month) < 12) {
      this.store.dispatch(
          new MonthActions.SetMonth(`${year}-${parseInt(month)+1}`)
      );
    } else {
      this.store.dispatch(
        new MonthActions.SetMonth(`${this.month}`)
      );
    }
  }

}
