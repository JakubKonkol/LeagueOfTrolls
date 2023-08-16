import {Injectable} from "@angular/core";
import {Fetcher} from "../tools/Fetcher";
import {Item} from "../model/Item";

@Injectable({
  providedIn: 'root'
})
export class ItemService{
  private _items: Item[] = [];
  constructor() {
    const f = new Fetcher();
    this._items = f.items;
  }

  set items(value: Item[]) {
    this._items = value;
  }

  get items(): Item[] {
    return this._items;
  }
}
