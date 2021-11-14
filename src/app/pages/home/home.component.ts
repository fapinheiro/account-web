import { Component, OnDestroy, OnInit } from '@angular/core';
import { switchMap} from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Subscription, of } from 'rxjs';
import * as fromApp from '../../store/app.reducer';
import * as ItemActions from '../../store/item/item.actions';
import { Item } from '../../model/item.model';
import * as Helper from '../../helpers/dataFilter';
import { items } from '../../data/items'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  items: Item[] = [];
  itemFilteredSubscription!: Subscription;
  
  month: string = Helper.getCurrentMonth();
  monthSubscription: Subscription;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.itemFilteredSubscription = this.store.select('items')
      .pipe(
        switchMap( data => {
          return of(data.items);
        })
      ).subscribe(
        items => {
          this.items = Helper.filteredListByMonth(items, this.month);
        }
      );
  
    this.monthSubscription = this.store.select('month')
        .subscribe(
          data => {
            this.month = data.month;
            this.items = Helper.filteredListByMonth(items, this.month);
          }
        );
  }

  ngOnDestroy(): void {
    this.itemFilteredSubscription.unsubscribe();
    this.monthSubscription.unsubscribe();
  }
}
